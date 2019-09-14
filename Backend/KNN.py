
def KNN_off_clustering(spending_categories):
    import pandas as pd
    from sklearn.neighbors import NearestNeighbors

    df = pd.read_csv('complete.csv')

    neigh = NearestNeighbors(1)
    neigh.fit(list(df.iloc[:, 10:-1].values))
    nearest = neigh.kneighbors([spending_categories])

    distance = nearest[0][0][0]
    index = nearest[1][0][0]
    return index, distance
    
#print(df.iloc[500, 10:-1])
