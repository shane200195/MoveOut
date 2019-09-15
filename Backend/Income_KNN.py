
def Income_KNN(income, age, new_region):
    import pandas as pd
    from sklearn.neighbors import NearestNeighbors

    df = pd.read_csv('../location_csv/' + new_region + '.csv')

    comparison = pd.DataFrame({'age':list(df['age']*1000), 'income': list(df['totalIncome'])})


    neigh = NearestNeighbors(n_neighbors=5, radius=5000)
    neigh.fit(comparison)
    nearest = neigh.kneighbors([[age, income]], return_distance= False)

    #getting the nearest point's ids
    print(nearest[0])
    ids = []
    for i in nearest[0]:
        ids.append(df.iloc[i, 3])

    return ids