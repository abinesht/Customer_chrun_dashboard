from urllib import response
from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
from flask_cors import CORS
from flask import jsonify
from flask import request
import joblib
import time
import tkinter as tk
from tkinter import ttk
from pyautogui import *
import pyautogui

app = Flask(__name__)
CORS(app)
model = joblib.load("finalized_model_chrun.sav")

@app.route('/h/')
def run_script():
    file = open(r'AtlasEarthAutoClick.py', 'r').read()
    exec(file)
    return "hii"


@app.route('/hii/')
def hello_world():
    return {'hello':['hi','hiii']}











# @app.route('/prediction/', methods = ['POST'])
# def predict():
#     print(request.form)
@app.route("/predicts/",methods=['POST','GET'])
def user():
    response = jsonify({'name': 'sofia', 'email': 'sofia@gmail.com'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return  response

@app.route('/predict/',methods=['POST','GET'])
def predict():
    int_features=[int(x) for x in request.form.values()]
    final=[np.array(int_features)]
    print(int_features)
    print(final)
   
    prediction=model.predict_proba(final)
    output='{0:.{1}f}'.format(prediction[0][1], 2)
    return output
#     if output>str(0.5):
#         return render_template('forest_fire.html',pred='Your Forest is in Danger.\nProbability of fire occuring is {}'.format(output),bhai="kuch karna hain iska ab?")
#     else:
#         return render_template('forest_fire.html',pred='Your Forest is safe.\n Probability of fire occuring is {}'.format(output),bhai="Your Forest is Safe for now")


if __name__ == '__main__':
    app.debug = True
    app.run()