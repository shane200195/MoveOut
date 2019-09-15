import pandas as pd

df = pd.read_csv('../location_csv/Toronto.csv')
for i in df.index:
    if df.loc[i, 'addresses/principalResidence/municipality'] != "Toronto" or df.loc[i, "habitationStatus"] == "With Parent":
        df.drop(i, inplace = True)

df.to_csv("../location_csv/Toronto.csv")
print(len(df))
        