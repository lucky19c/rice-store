from flask import Blueprint, request, jsonify
from database import connection

products = Blueprint("products", __name__)


@products.route("/products", methods=["GET"])
def get_products():

    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM products"
    )

    data = cursor.fetchall()

    cursor.close()

    return jsonify(data)



@products.route("/products", methods=["POST"])
def add_product():

    try:

        data=request.json

        cursor=connection.cursor()

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

            data["rice_name"],
            data["description"],
            data["price"],
            data["stock_quantity"],
            data["image"],
            data["category"]

        )

        cursor.execute(query,values)

        connection.commit()

        cursor.close()

        return jsonify({
            "message":"Product added"
        })

    except Exception as e:

        print(e)

        return jsonify({
            "error":str(e)
        }),500



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

        cursor.execute(query,values)

        connection.commit()

        cursor.close()

        return jsonify({
            "message":"Product updated"
        })

    except Exception as e:

        print(e)

        return jsonify({
            "error":str(e)
        }),500



@products.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):

    try:

        cursor=connection.cursor()

        cursor.execute(

            "DELETE FROM products WHERE product_id=%s",

            (id,)
        )

        connection.commit()

        cursor.close()

        return jsonify({

            "message":"Product deleted"

        })

    except Exception as e:

        print(e)

        return jsonify({

            "error":str(e)

        }),500