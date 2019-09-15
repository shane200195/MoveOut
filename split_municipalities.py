import json


FILENAME = "raw_customers.json"
with open(FILENAME, 'r') as f:
     data = json.load(f)
print(data[0])
for habitation in ["Group", "With Parent", "With Spouse"]:
    x = list(filter(lambda y: y.get("habitationStatus", None) == habitation, data))
    with open(f"{habitation}_{FILENAME}", 'w') as f:
        json.dump(x, f)
