import requests
import csv 
import json

response = requests.get('https://api.td-davinci.com/api/branches',
    headers = { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMGJhZjdmMWYtZmZiNC0zN2ViLTkzYzUtY2NmMzc1NjlkNzhmIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI1YWFhYTg0Ni03MTkyLTQxOWMtOWJmMC04YzM5MjUxZmMzYjIifQ.kwtPiBeNz4kl6MqUhuyKIfmvy16f5_oqJAQIgBe942k' })
response_data = response.json()

print(response_data)