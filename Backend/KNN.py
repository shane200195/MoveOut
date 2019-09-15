
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
    print(df.iloc[index, 7])
    return index, distance

print(KNN_off_clustering([111,17,0,43,12,0,0,0,0,0,0,0,0], "North York"))
#print(df.iloc[500, 10:-1])
