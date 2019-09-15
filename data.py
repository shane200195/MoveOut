import requests
import csv 
import json
import pandas
from multiprocessing import Pool

API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiOGQ4ZDMwZjEtZTQxMi0zOTNmLWE2ZTQtNzczZDQyMWI5NzI0IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI5MGMzMGUyNy1iYTRkLTQ2NjItYjA4OS1iMGNhZDI2ZTNjOTcifQ.-7qShH8sdyjD6FAy48I_O2bMC77vxxmxPHDeoZOUX-8"

counter = 0
categories = {"Food and Dining": 0, "Income": 0, "Entertainment": 0,"Transfer": 0, "Shopping": 0, "Bills and Utilities": 0, "Auto and Transport": 0, "Home": 0, "Taxes": 0, "Health and Fitness": 0, 'Fees and Charges':0, 'Mortgage and Rent': 0, "Travel": 0}

COST_TAGS = set(["Food and Dining", "Entertainment", "Transfer", "Shopping", "Bills and Utilities", "Auto and Transport", "Home", "Taxes", "Health and Fitness", 'Fees and Charges', 'Mortgage and Rent', "Travel"])
INCOME_TAGS = set(["Income"])


def map_transaction(t):
  try:
      return {
        "currencyAmount": t["currencyAmount"],
        "originationDateTime": t["originationDateTime"],
        "categoryTags": t["categoryTags"][0]
      }
  except IndexError:
      return None

def create_example(example):
    transactions = requests.get(f"https://api.td-davinci.com/api/customers/{example['id']}/transactions", headers={"authorization": API_KEY}).json()["result"]
    example = {
      "id": example["id"],
      "birthDate": example["birthDate"],
      "habitationStatus": example["habitationStatus"],
      "municipality": example["addresses"]["principalResidence"]["municipality"],
      "costs": list(map(map_transaction, filter(lambda x: len(set(x["categoryTags"]) & COST_TAGS), transactions))),
      "incomes": list(map(map_transaction, filter(lambda x: len(set(x["categoryTags"]) & INCOME_TAGS), transactions))), 
    }
    return example

def batch(iterable, n=1):
    l = len(iterable)
    for ndx in range(0, l, n):
        yield iterable[ndx:min(ndx + n, l)]

FILENAME="Group_raw_customers.json"

def process_batch(batch_i):
    batch, i = batch_i
    print(f"Starting {i}.")
    results = []
    for x in batch:
        results.append(create_example(x))    
    print(f"Process {i}, Done processing {len(batch)} customers.")
    name, _ = FILENAME.split(".")
    with open(f"{name}_transactions_{i}.json", "w") as f:
        json.dump(results, f)
    return results


with open(FILENAME, "r") as f:
    data = json.load(f)

data = list(batch(data, n=int(len(data)/(20*6))))
p_data = zip(data, range(len(data)))
p = Pool(6)
results = p.map(process_batch, p_data)

flat = []
for r in results:
    flat.extend(r)

with open(f"FULL_{FILENAME}", "w") as f:
    json.dump(flat, f)
 






#for i in df.index:
#    #getting the id of the current element
#    id = df.loc[i, 'id']
#    transactions = requests.get('https://api.td-davinci.com/api/customers/' + id + '/transactions',
#    headers = {
#        "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiYWJiZWM0MzAtMzUyMy0zZmY2LTljNWEtN2UwN2FlZmMzNzU4IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIzYmVhMmZiZC0xNGQ2LTQ2YWUtYmVlNS03ODNjMTQ1ZGQ5ODkifQ.BOuUoNO6CTE2gFGeV_RymfrVPo9_PI8BsrPCrgKRWmc"
#    }).json()
#
#    #total indicates sum of all the individual amounts
#    total = 0
#    for i in transactions['result']:
#        #seeing which category the purchase is at
#        tag = i['categoryTags'][0]
#        categories[tag] += 1
#
#        #adding their independent expenditures to the total
#        total += i['currencyAmount']
#
#    #setting the individual categories in pandas
#    for index, value in categories.items():
#        df.loc[df.index[counter], index] = value
#
#    #finding the total spending of the month
#    df.loc[df.index[counter], "spending"] = total
#
#    counter += 1
#    print(total, counter)
#    categories = {"Food and Dining": 0, "Income": 0, "Entertainment": 0,"Transfer": 0, "Shopping": 0, "Bills and Utilities": 0, "Auto and Transport": 0, "Home": 0, "Taxes": 0, "Health and Fitness": 0, 'Fees and Charges':0, 'Mortgage and Rent': 0, "Travel": 0}
#
#df.to_csv('final2.csv')
#
##teamkey: 3bea2fbd-14d6-46ae-bee5-783c145dd989
