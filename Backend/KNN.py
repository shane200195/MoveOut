
def KNN_off_clustering(spending_categories, new_region):
    import pandas as pd
    from sklearn.neighbors import NearestNeighbors

    df = pd.read_csv('../location_csv/' + new_region + '.csv')
    print(df)
    neigh = NearestNeighbors(1)
    neigh.fit(list(df.iloc[:, 11:-1].values))
    nearest = neigh.kneighbors([spending_categories])

    distance = nearest[0][0][0]
    index = nearest[1][0][0]
    
    #getting the income of the person
    income = df.iloc[index, 10]
    print(income)
    return index, distance

print(KNN_off_clustering([175,17,0,43,12,0,0,5,0,0,0,0,0], "Toronto"))
#print(df.iloc[500, 10:-1])
