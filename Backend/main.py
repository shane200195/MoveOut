import flask
from flask import render_template, Flask, request, jsonify
from flask_cors import CORS
from flask import Flask
import requests
from moveout import CategoryModel
from KNN import KNN_off_clustering
import numpy as np


app = Flask(__name__)
CORS(app)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

cm = CategoryModel(["../final.csv", "../final2.csv"])
## To Call: 
## results = cm.process_customer({...})

@app.route("/")
def test():
    return render_template('index.html')

@app.route("/response", methods = ['POST'])
def response():
    origin = request.get_json(force=True)

    #the location to feed into the ML model
    location = "Etobicoke"

    #handling which user it is currently logged in.
    user = origin['ID']

    names_val = {
        "Parker.Filer":{
            "ID": "cd260aa2-f1c2-4262-8d5a-669691053038",
            "Categories": [111, 0, 12,	0,	0,	0,	0,	0,	0,	0,	0],
        },

        "Tina.Fannell": {
            "ID": "95c36b3b-c5a9-4fea-9140-d70ecfe8a3d2",
            "Categories": [107,	0,	14,	0,	0,	0,	0,	0,	0,	0,	0]
        },

        "Orville.Duplin": {
            "ID": "af0b2738-038e-448e-9093-49356542e06a",
            "Categories": [143,	4, 11,	25,	17,	9,	0,	0,	0,	7,	0]
        },

        "Jensen.Kieler": {
            "ID": "2015c281-e874-4b88-a81e-efea19bbd437",
            "Categories": [153,	6,14,	19,	20,	9,	0,	0,	0,	7,	0]
        },

        "Mekhi.Mccorkle": {
            "ID": "64b0c7d0-ebef-40e0-8d86-f8c681c95c7b",
            "Categories": [112,		0,		12,	0,	0,	0,	0,	0,	0,	0,	0]
        }

    }

    ID = names_val[user]["ID"]
    key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiYWJiZWM0MzAtMzUyMy0zZmY2LTljNWEtN2UwN2FlZmMzNzU4IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIzYmVhMmZiZC0xNGQ2LTQ2YWUtYmVlNS03ODNjMTQ1ZGQ5ODkifQ.BOuUoNO6CTE2gFGeV_RymfrVPo9_PI8BsrPCrgKRWmc"
    response = requests.get('https://api.td-davinci.com/api/customers/' + ID,
    headers = { 'Authorization': key })
    response_data = response.json()['result']
    old_location = response_data['addresses']['principalResidence']['municipality']

    response = cm.process_customer(
        {
        "customer-id": ID,
        "customer-data": ["With Parent", old_location] + names_val[user]["Categories"],
        "municipalities": [location], # so in general you will want all municipalities
        }
    )
    for k in response["municipalities"].keys():
        v = response["municipalities"][k]
        response["municipalities"][k] = [max(0, int(vi)) for vi in list(np.nan_to_num(v))]

    #print(response['municipalities'][location])
    print(["With Parent", old_location] + names_val[user]["Categories"])
    income_difference = KNN_off_clustering(response['municipalities'][location], location)
    income = response_data['totalIncome']

    print(income_difference, income)

    #setting the properties
    name = response_data['givenName'] + " " + response_data['surname']
    age = response_data['age']
    return jsonify({'name': name, 'age': age, 'firstname': response_data['givenName'], 'livingin': "Toronto"})

#10.32.110.93
if __name__ == "__main__":
    app.run(host = '0.0.0.0')
