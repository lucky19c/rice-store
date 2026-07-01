from flask import Blueprint, jsonify, request
from database import db, cursor

orders = Blueprint("orders", __name__)


@orders.route("/orders", methods=["GET"])
def get_orders():

    query = """
    SELECT
    o.order_id,
    c.fullname,
    c.contact_number,
    o.total_amount,
    o.status

    FROM orders o

    JOIN customers c
    ON o.customer_id=c.customer_id

    ORDER BY o.order_id DESC
    """

    cursor.execute(query)

    results = cursor.fetchall()

    data=[]

    for row in results:

        data.append({

            "order_id":row[0],
            "fullname":row[1],
            "contact_number":row[2],
            "total_amount":row[3],
            "status":row[4]

        })

    return jsonify(data)



@orders.route("/orders/<int:id>",methods=["PUT"])
def update_order(id):

    data=request.json

    status=data["status"]

    cursor.execute(
        """
        UPDATE orders
        SET status=%s
        WHERE order_id=%s
        """,
        (
            status,
            id
        )
    )

    db.commit()

    return jsonify({
        "message":"Status updated"
    })