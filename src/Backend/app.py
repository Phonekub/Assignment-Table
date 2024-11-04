from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://mongo:mongo@cluster0.jhgevbw.mongodb.net/"
client = MongoClient(uri)

db = client["pets"]
collection = db["pets"]

pets = []
check = []
total = 0


p_in_DB = collection.find()
pets_all=[]
for p in p_in_DB:
    pets_all.append(p)

app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "Hello, Pet Shop!"

@app.route("/products",methods=["GET"])
def get_all_products():
    return jsonify(pets_all),200

@app.route('/123')
def oak():
    return "Hello, dogg/123"

if __name__ == '__main__':
    app.run(debug=True)
