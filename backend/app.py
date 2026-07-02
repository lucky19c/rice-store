from flask import Flask, send_from_directory
from flask_cors import CORS
import os

from routes.products import products
from routes.checkout import checkout
from routes.orders import orders

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/*":{
            "origins":"*"
        }
    }
)

UPLOAD_FOLDER="uploads"

app.config["UPLOAD_FOLDER"]=UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


app.register_blueprint(products)
app.register_blueprint(checkout)
app.register_blueprint(orders)


@app.route("/")
def home():

    return {
        "message":"Backend running"
    }


@app.route("/uploads/<filename>")
def uploaded_file(filename):

    return send_from_directory(
        app.config["UPLOAD_FOLDER"],
        filename
    )


if __name__=="__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )