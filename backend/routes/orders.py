from flask import Blueprint, jsonify, request
from database import connection

orders = Blueprint("orders", __name__)


# Get all orders
@orders.route("/orders", methods=["GET"])
def get_orders():

    try:

        cursor = connection.cursor(dictionary=True)

        query = """

        SELECT
        o.order_id,
        c.fullname,
        c.contact_number,
        c.address,
        c.email,
        o.total_amount,
        o.status

        FROM orders o

        JOIN customers c
        ON o.customer_id=c.customer_id

        ORDER BY o.order_id DESC

        """

        cursor.execute(query)

        data = cursor.fetchall()

        cursor.close()

        return jsonify(data)

    except Exception as e:

        print(e)

        return jsonify({
            "error":str(e)
        }),500



# Update order status
@orders.route("/orders/<int:id>", methods=["PUT"])
def update_order(id):

    try:

        data=request.json

        cursor=connection.cursor()

        cursor.execute(

            """

            UPDATE orders

            SET status=%s

            WHERE order_id=%s

            """,

            (

                data["status"],
                id

            )

        )

        connection.commit()

        cursor.close()

        return jsonify({

            "message":"Status updated"

        })

    except Exception as e:

        print(e)

        return jsonify({

            "error":str(e)

        }),500



# Delete order
@orders.route("/orders/<int:id>", methods=["DELETE"])
def delete_order(id):

    try:

        cursor=connection.cursor()

        cursor.execute(

            "DELETE FROM order_items WHERE order_id=%s",

            (id,)
        )

        cursor.execute(

            "DELETE FROM orders WHERE order_id=%s",

            (id,)
        )

        connection.commit()

        cursor.close()

        return jsonify({

            "message":"Order deleted"

        })

    except Exception as e:

        print(e)

        return jsonify({

            "error":str(e)

        }),500