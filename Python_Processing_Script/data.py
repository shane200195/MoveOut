import requests
import csv 
import json
import pandas
counter = 0
df = pandas.read_csv("RawData/result.csv")
categories = {"Food and Dining": 0, "Income": 0, "Entertainment": 0,"Transfer": 0, "Shopping": 0, "Bills and Utilities": 0, "Auto and Transport": 0, "Home": 0, "Taxes": 0, "Health and Fitness": 0, 'Fees and Charges':0, 'Mortgage and Rent': 0, "Travel": 0}

for i in df.index:
    #getting the id of the current element
    id = df.loc[i, 'id']
    transactions = requests.get('https://api.td-davinci.com/api/customers/' + id + '/transactions',
    headers = {
        "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiYWJiZWM0MzAtMzUyMy0zZmY2LTljNWEtN2UwN2FlZmMzNzU4IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIzYmVhMmZiZC0xNGQ2LTQ2YWUtYmVlNS03ODNjMTQ1ZGQ5ODkifQ.BOuUoNO6CTE2gFGeV_RymfrVPo9_PI8BsrPCrgKRWmc"
    }).json()

    #total indicates sum of all the individual amounts
    total = 0
    for i in transactions['result']:
        #seeing which category the purchase is at
        tag = i['categoryTags'][0]
        categories[tag] += 1

        #adding their independent expenditures to the total
        total += i['currencyAmount']

    #setting the individual categories in pandas
    for index, value in categories.items():
        df.loc[df.index[counter], index] = value

    #finding the total spending of the month
    df.loc[df.index[counter], "spending"] = total

    counter += 1
    print(total, counter)
    categories = {"Food and Dining": 0, "Income": 0, "Entertainment": 0,"Transfer": 0, "Shopping": 0, "Bills and Utilities": 0, "Auto and Transport": 0, "Home": 0, "Taxes": 0, "Health and Fitness": 0, 'Fees and Charges':0, 'Mortgage and Rent': 0, "Travel": 0}

df.to_csv('final2.csv')

#teamkey: 3bea2fbd-14d6-46ae-bee5-783c145dd989

    



