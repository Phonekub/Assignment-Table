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

@app.route("/products",methods=["POST"])
@cross_origin()
def add_product():
    data = request.get_json(pets_all)
    count = 0
    oak = 0
    if pets_all:
        print("it empty!!!!")
    for _ in pets_all :
        count = _
        oak = 1   
    ttt = 0
    if oak != 0 :
        ttt = count["_id"]+1
    new_product = {
        "_id":ttt,
        "name":data["name"],
        "price":data["price"],
        "img":data["img"],
        "type":data["type"],
        "gender":data["gender"],
        "detail":data["detail"],
    }
    pets_all.append(new_product)
    collection.insert_one({
        "_id":ttt,
        "name":data["name"],
        "price":data["price"],
        "img":data["img"],
        "type":data["type"],
        "gender":data["gender"],
        "detail":data["detail"],
    })
    return jsonify(pets_all),200

@app.route("/products/<int:id>",methods=["DELETE"])
def delete_product(id):
    for o in pets_all:
        if(o["_id"] == id):

            print(o)
            
            pets_all.remove(o)
            collection.delete_one({"_id":id})
            
            return jsonify(pets_all),200
    return jsonify(pets_all),404


@app.route("/products/<int:id>",methods=["PUT"])
def update_product(id):
    data = request.get_json(pets_all)
    for o in pets_all:
        if(o["_id"] == id):
            o.update(data)
            collection.update_many(
                {"_id":o["_id"]},
                {"$set":{
                        "name": data["name"] if data["name"] != "" else o["name"],
                        "price": data["price"] if data["price"] != "" else o["price"],
                        "img": data["img"] if data["img"] != "" else o["img"],
                        "type": data["type"] if data["type"] != "" else o["type"],
                        "gender": data["gender"] if data["gender"] != "" else o["gender"],
                        "detail": data["detail"] if data["detail"] != "" else o["detail"],
                    }
                }
            )
            return jsonify(pets_all),200
    return jsonify("Not found!!"),200

@app.route('/123')
def oak():
    return "Hello, dogg/123"

if __name__ == '__main__':
    app.run(debug=True)
