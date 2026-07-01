from flask import Blueprint, jsonify
from database import cursor

dashboard = Blueprint("dashboard", __name__)

@dashboard.route("/dashboard", methods=["GET"])
def get_dashboard():

    # Products count
    cursor.execute(
        "SELECT COUNT(*) FROM products"
    )
    total_products = cursor.fetchone()[0]


    # Orders count
    cursor.execute(
        "SELECT COUNT(*) FROM orders"
    )
    total_orders = cursor.fetchone()[0]


    # Customers count
    cursor.execute(
        "SELECT COUNT(*) FROM customers"
    )
    total_customers = cursor.fetchone()[0]


    # Revenue
    cursor.execute(
        """
        SELECT IFNULL(
        SUM(total_amount),
        0
        )
        FROM orders
        """
    )

    total_sales = cursor.fetchone()[0]


    # Low stock (<5)
    cursor.execute(
        """
        SELECT
        rice_name,
        stock_quantity

        FROM products

        WHERE stock_quantity < 5
        """
    )

    low_stock = []

    for row in cursor.fetchall():

        low_stock.append({

            "rice_name": row[0],
            "stock_quantity": row[1]

        })


    return jsonify({

        "total_products": total_products,
        "total_orders": total_orders,
        "total_customers": total_customers,
        "total_sales": total_sales,
        "low_stock": low_stock

    })