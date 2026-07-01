from flask import Blueprint, request, jsonify
from database import cursor

auth = Blueprint("auth",__name__)

@auth.route("/login",methods=["POST"])
def login():

    data=request.json

    username=data["username"]
    password=data["password"]

    cursor.execute(
        """
        SELECT *
        FROM admin_users
        WHERE username=%s
        AND password=%s
        """,
        (
            username,
            password
        )
    )

    admin=cursor.fetchone()

    if admin:

        return jsonify({

            "success":True

        })

    return jsonify({

        "success":False

    }),401