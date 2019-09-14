import flask
from flask import render_template, Flask, request, jsonify
from flask_cors import CORS
from flask import Flask
import requests

app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = 's200195'

@app.route("/")
def test():
    return render_template('index.html')

@app.route("/response", methods = ['POST'])
def response():
    return "hello world"

if __name__ == "__main__":
    app.run(host = '0.0.0.0')