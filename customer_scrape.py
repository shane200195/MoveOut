import requests
import json

API_TOKEN  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiOGQ4ZDMwZjEtZTQxMi0zOTNmLWE2ZTQtNzczZDQyMWI5NzI0IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI5MGMzMGUyNy1iYTRkLTQ2NjItYjA4OS1iMGNhZDI2ZTNjOTcifQ.-7qShH8sdyjD6FAy48I_O2bMC77vxxmxPHDeoZOUX-8"
CUSTOMERS_LIST = 'https://api.td-davinci.com/api/raw-customer-data'

r = requests.post(CUSTOMERS_LIST, headers={'Content-type':'application/json', 'Accept':'application/json', 'Authorization': API_TOKEN })
r= r.json()['result']


customers = r["customers"]
token = r["continuationToken"]
print(token)

iterations = 1000
for i in range(iterations):
    r = requests.post(CUSTOMERS_LIST,  headers={'Content-type':'application/json', 'Accept':'application/json', 'Authorization': API_TOKEN }, data=json.dumps({'continuationToken': token}))
    r = r.json()['result']
    customers.extend(r["customers"])
    token = r["continuationToken"]
   
with open('raw_customers.json', 'w') as fp:
    json.dump(customers, fp)
