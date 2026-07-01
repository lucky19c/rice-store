from flask import Flask
from flask_cors import CORS

from routes.products import products
from routes.checkout import checkout

app = Flask(__name__)

# Allow React frontend
CORS(
    app,
    resources={
        r"/*": {
            "origins": "*"
        }
    }
)

# Routes
app.register_blueprint(products)
app.register_blueprint(checkout)

@app.route("/")
def home():
    return {"message":"Backend running"}

if __name__ == "__main__":
    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )