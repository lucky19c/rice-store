from flask import Blueprint, request, jsonify
from database import connection

checkout = Blueprint("checkout", __name__)


@checkout.route("/checkout", methods=["POST"])
def place_order():

    try:

        data = request.json

        customer = data["customer"]
        items = data["items"]

        cursor = connection.cursor()


        # ==========================
        # Save customer
        # ==========================

        customer_query = """

        INSERT INTO customers
        (
            fullname,
            contact_number,
            email,
            address
        )

        VALUES
        (
            %s,
            %s,
            %s,
            %s
        )

        """

        customer_values=(

            customer["fullname"],
            customer["contact_number"],
            customer["email"],
            customer["address"]

        )

        cursor.execute(

            customer_query,
            customer_values

        )

        customer_id=cursor.lastrowid


        # ==========================
        # Calculate total
        # ==========================

        total_amount=0

        for item in items:

            total_amount += (

                float(item["price"]) *
                int(item["quantity"])

            )


        # ==========================
        # Create order
        # ==========================

        cursor.execute(

            """

            INSERT INTO orders
            (
                customer_id,
                total_amount,
                status
            )

            VALUES
            (
                %s,
                %s,
                %s
            )

            """,

            (

                customer_id,
                total_amount,
                "Pending"

            )

        )

        order_id=cursor.lastrowid


        # ==========================
        # Process items
        # ==========================

        for item in items:

            product_id=item["product_id"]

            quantity=item["quantity"]


            # Check stock

            cursor.execute(

                """

                SELECT stock_quantity

                FROM products

                WHERE product_id=%s

                """,

                (product_id,)

            )

            product=cursor.fetchone()


            if not product:

                return jsonify({

                    "error":
                    "Product not found"

                }),404


            current_stock=product[0]


            if current_stock < quantity:

                return jsonify({

                    "error":

                    f"Only {current_stock} stock remaining"

                }),400


            # Save order item

            cursor.execute(

                """

                INSERT INTO order_items
                (
                    order_id,
                    product_id,
                    quantity
                )

                VALUES
                (
                    %s,
                    %s,
                    %s
                )

                """,

                (

                    order_id,
                    product_id,
                    quantity

                )

            )


            # Reduce stock

            cursor.execute(

                """

                UPDATE products

                SET stock_quantity=

                stock_quantity-%s

                WHERE product_id=%s

                """,

                (

                    quantity,
                    product_id

                )

            )


        connection.commit()

        cursor.close()

        return jsonify({

            "message":
            "Order placed successfully"

        })


    except Exception as e:

        print(

            "CHECKOUT ERROR:",
            e

        )

        return jsonify({

            "error":
            str(e)

        }),500