import flask
from flask import render_template, Flask, request, jsonify
from flask_cors import CORS
from flask import Flask
import requests
from moveout import CategoryModel


app = Flask(__name__)
CORS(app)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

cm = CategoryModel("../final.csv", "../final2.csv")
## To Call: 
## results = cm.process_customer({...})

@app.route("/")
def test():
    return render_template('index.html')

@app.route("/response", methods = ['POST'])
def response():
    origin = request.get_json(force=True)

    #the location to feed into the ML model
    location = "Toronto"

    #handling which user it is currently logged in.
    user = origin['ID']
    key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiYWJiZWM0MzAtMzUyMy0zZmY2LTljNWEtN2UwN2FlZmMzNzU4IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIzYmVhMmZiZC0xNGQ2LTQ2YWUtYmVlNS03ODNjMTQ1ZGQ5ODkifQ.BOuUoNO6CTE2gFGeV_RymfrVPo9_PI8BsrPCrgKRWmc"
    response = requests.get('https://api.td-davinci.com/api/customers/' + user,
    headers = { 'Authorization': key })
    response_data = response.json()['result']



    #setting the properties
    name = response_data['givenName'] + " " + response_data['surname']
    age = response_data['age']
    return jsonify({'name': name, 'age': age, 'firstname': response_data['givenName']})

#10.32.110.93
if __name__ == "__main__":
    app.run(host = '0.0.0.0')
