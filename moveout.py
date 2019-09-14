#!/usr/bin/env python
# coding: utf-8

# # MoveOut Model

# In[22]:


import sklearn
import numpy as np
import pandas as pd
from typing import List, Dict
pd.set_option('display.max_columns', 50) # For development reasons


# ## Preparing the Model

# In[8]:


d1 = pd.read_csv("final.csv")
d2 = pd.read_csv("final2.csv")
d = d1.append(d2)


# In[14]:


# Mapping of column -> unique values of column (mainly for use in categorical data)
domains = dict([(di, d[di].unique()) for di in list(d)])

print(f"{100*len(d[d['habitationStatus'] == 'With Parent'])/len(d)}% of customers live with their parents.")


# In[15]:


spending_categories = ['Food and Dining',
  'Entertainment',
  'Transfer',
  'Shopping',
  'Bills and Utilities',
  'Auto and Transport',
  'Home',
  'Taxes',
  'Health and Fitness',
  'Fees and Charges',
  'Mortgage and Rent',
  'Travel',
  'spending'
  ]
municipality = domains["addresses/principalResidence/municipality"]
groupby_keys = ["habitationStatus", "addresses/principalResidence/municipality"]
mean_categories = d.filter(items=spending_categories + groupby_keys).groupby(groupby_keys).agg(["mean"])[spending_categories].to_numpy()
var_categories = d.filter(items=spending_categories + groupby_keys).groupby(groupby_keys).agg(["var"])[spending_categories].to_numpy()
print(d.iloc[0]["addresses/principalResidence/municipality"], d.iloc[0]["habitationStatus"])


# ## Serving Customer

# In[16]:


def get_customer_details(data: List) -> List:
    """ Parses a Csv Line"""
    return data[
        list(d).index("habitationStatus"),
        list(d).index("addresses/principalResidence/municipality"),
        data[list(d).index("Food and Dining"): list(d).index("spending")]
    ]


# In[25]:


# Mapper function f:  (habitation status, municipality) -> index

def get_cluster_index(h: str, m: str) -> int:
    """ Gets the index within the cluster matrix for a given habitation and municipality pair.

    Args:
      m: The municipality of the consumer.
      h: The habitation status of the consumer.

    Returns:
      The index in the cluster matrix for the habitation and municipality pair if it is a valid pairing, else -1.

    Raises:
        ValueError: is raised when either the municipality of habitation status is not valid.
    """
    municipalities=["East York", "Etobicoke",  "North York", "Scarborough", "Toronto", "York"]
    habitations=["Group", "With Parent", "With Spouse"]
    try:
        return (len(municipalities) * habitations.index(h)) + municipalities.index(m)
    except ValueError:
        print(f"Cluster of ({h}, {m}) is not in model.")
        raise


# In[32]:


# Changes customer categories 

def normalise_customer(customer_value: np.array, i: int) -> np.array:
    mu, var = mean_categories[i, :], var_categories[i, :]
    return ((customer_value - mu)/np.sqrt(var))

def change_normalise_customer_category(normed_customer: np.array, new_i: int) -> np.array:
    mu, var = mean_categories[new_i, :], var_categories[new_i, :]
    return ((np.sqrt(var) * normed_customer) + mu)

def get_failed_request():
    return {
        "success": False,
        "municipalities": {}
    }


# ### API Call

# In[23]:


def process_customer(customer_request: Dict) -> Dict: 
    """ Process a single customer request. 
    
    Args: 
        customer_request: The request message from the customer (Note: not as a JSON, rather decoded). Format ->
            {
                "customer-id": "",
                "customer-data": "",
                "municipalities": ["", ""],
            }
            where: 
                customer-id: is the customer id from TD da vinci API.
                customer-data: A list of spending categories and metadata.
                    Format: [
                        'habitationStatus', 'addresses/principalResidence/municipality', Food and Dining',
                        'Entertainment', 'Transfer', 'Shopping', 'Bills and Utilities', 'Auto and Transport',
                        'Home', 'Taxes', 'Health and Fitness', 'Fees and Charges', 'Mortgage and Rent',
                        'Travel', 'spending'
                      ]
    Returns: 
      A dictionary with the expected cost for each municipalities requested. Format -> 
          {
              "success": bool,
              "municipalities": {
                  "m1": [],
                  "m2": [],
              }
          
          }
          where: 
              success: True, if the model was able to process the client for all requested municipalities, false otherwise.
              municipalities: A mapping of municipalities to costs. Each municipality value is the same format as the customer-data documented above.
    """
    h, m = customer_request["customer-data"][0:2]
    
    try:
        index = get_cluster_index(h,m)
        categories = [float(i) for i in customer_request["customer-data"][2:]]
        normalised = normalise_customer(np.array(categories), index)

        municipalities = {}
        for m in customer_request["municipalities"]:
            m_index = get_cluster_index("Group", m)
            municipalities[m] = change_normalise_customer_category(normalised, m_index)
        return {
            "success": True,
            "municipalities": municipalities
        }
    except ValueError:
        return get_failed_request()   


# ### Test API

# In[33]:


import csv
municipalities=["East York", "Etobicoke",  "North York", "Scarborough", "Toronto", "York"]

with open('final.csv', 'r') as csvfile:
    r = csv.reader(csvfile, delimiter=',')
    i = 0
    for row in r:
        print(row)
        if i:
            print(process_customer({
             "customer-id": "",
                "customer-data": row[3:5] + row[9:-1],
                "municipalities": municipalities,
        }))
        i+=1
        if i > 10:
            break


# In[ ]:



