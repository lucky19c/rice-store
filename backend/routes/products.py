from flask import Blueprint, request, jsonify, current_app
from database import connection
from werkzeug.utils import secure_filename
import os

products = Blueprint("products", __name__)


# ==========================
# GET PRODUCTS
# ==========================

@products.route("/products", methods=["GET"])
def get_products():

    try:

        cursor = connection.cursor(dictionary=True)

        cursor.execute(
            "SELECT * FROM products"
        )

        data = cursor.fetchall()

        cursor.close()

        return jsonify(data)

    except Exception as e:

        print("GET ERROR:", e)

        return jsonify({
            "error": str(e)
        }),500


# ==========================
# ADD PRODUCT
# ==========================

@products.route("/products", methods=["POST"])
def add_product():

    try:

        cursor = connection.cursor()

        rice_name=request.form["rice_name"]
        description=request.form["description"]
        price=request.form["price"]
        stock_quantity=request.form["stock_quantity"]
        category=request.form["category"]

        image=request.files["image"]

        filename=secure_filename(
            image.filename
        )

        filepath=os.path.join(

            current_app.config[
                "UPLOAD_FOLDER"
            ],

            filename

        )

        image.save(filepath)

        image_url=(
            f"http://127.0.0.1:5000/uploads/{filename}"
        )


        query="""

        INSERT INTO products
        (

        rice_name,
        description,
        price,
        stock_quantity,
        image,
        category

        )

        VALUES
        (

        %s,
        %s,
        %s,
        %s,
        %s,
        %s

        )

        """


        values=(

            rice_name,
            description,
            price,
            stock_quantity,
            image_url,
            category

        )


        cursor.execute(
            query,
            values
        )

        connection.commit()

        cursor.close()

        return jsonify({

            "message":"Product added successfully"

        })


    except Exception as e:

        print(
            "ADD ERROR:",
            e
        )

        return jsonify({

            "error":str(e)

        }),500



# ==========================
# UPDATE PRODUCT
# ==========================

@products.route("/products/<int:id>", methods=["PUT"])
def update_product(id):

    try:

        data=request.json

        cursor=connection.cursor()

        query="""

        UPDATE products

        SET

        rice_name=%s,
        description=%s,
        price=%s,
        stock_quantity=%s,
        image=%s,
        category=%s

        WHERE product_id=%s

        """

        values=(

            data["rice_name"],
            data["description"],
            data["price"],
            data["stock_quantity"],
            data["image"],
            data["category"],
            id

        )


        cursor.execute(
            query,
            values
        )

        connection.commit()

        cursor.close()


        return jsonify({

            "message":"Product updated"

        })


    except Exception as e:

        print(
            "UPDATE ERROR:",
            e
        )

        return jsonify({

            "error":str(e)

        }),500



# ==========================
# DELETE PRODUCT
# ==========================

@products.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):

    try:

        cursor=connection.cursor()

        cursor.execute(

            "DELETE FROM products WHERE product_id=%s",

            (id,)

        )

        connection.commit()

        rows_deleted=cursor.rowcount

        cursor.close()


        if rows_deleted > 0:

            return jsonify({

                "message":"Product deleted"

            }),200

        else:

            return jsonify({

                "message":"Product not found"

            }),404


    except Exception as e:

        print(
            "DELETE ERROR:",
            e
        )

        return jsonify({

            "error":str(e)

        }),500