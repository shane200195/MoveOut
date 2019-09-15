import pandas as pd

df = pd.read_csv('../location_csv/complete.csv')
zones = {"East York": [0,0], "Etobicoke": [0,0],  "North York": [0,0], "Scarborough": [0,0], "Toronto": [0,0], "York": [0,0]}
n= 0
for i in df.index:

    if df.iloc[i,3] < 24:
        zones[df.iloc[i,5]][1] += 1
        zones[df.iloc[i,5]][0] += df.iloc[i,-1]

for y in zones:
    zones[y] = zones[y][0]/zones[y][1]

print(zones)