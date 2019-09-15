import json
import numpy as np
import dateutil.parser
from datetime import timedelta
from scipy import interpolate
from scipy.signal import savgol_filter

TRANSACTION_STEPS = 100
SAVGOL_WINDOW = 13
SAVGOL_ORDER = 2
HISTORY_SIZE = 60
TARGET_SIZE = 30
BATCH_SIZE = 100

#example = {
#      "id": example["id"],
#      "birthDate": example["birthDate"],
#      "habitationStatus": example["habitationStatus"],
#      "municipality": example["addresses"]["principalResidence"]["municipality"],
#      "costs": list(map(map_transaction, filter(lambda x: len(set(x["categoryTags"]) & COST_TAGS), transactions))),
#      "incomes": list(map(map_transaction, filter(lambda x: len(set(x["categoryTags"]) & INCOME_TAGS), transactions))),
#    }
#
#{
#        "currencyAmount": t["currencyAmount"],
#        "originationDateTime": t["originationDateTime"],
#        "categoryTags": t["categoryTags"][0]
#      }

def numpy_batch(iterable, batchsize):
    l = len(iterable)
    for ndx in range(0, l, batchsize):
        yield np.array(iterable[ndx:min(ndx + batchsize, l)])


def batch(iterable, n=1):
    l = len(iterable)
    for ndx in range(0, l, n):
        yield iterable[ndx:min(ndx + n, l)]

# generator: A generator or an instance of Sequence (keras.utils.Sequence) object in order
#       to avoid duplicate data when using multiprocessing. The output of the generator
#       must be either:
#             * a tuple (inputs, targets)
#             * a tuple (inputs, targets, sample_weights).
#
#       This tuple (a single output of the generator) makes a single batch.
#       Therefore, all arrays in this tuple must have the same length (equal to the size
#       of this batch). Different batches may have different sizes. For example, the last
#       batch of the epoch is commonly smaller than the others, if the size of the dataset
#       is not divisible by the batch size. The generator is expected to loop over its
#       data indefinitely. An epoch finishes when steps_per_epoch batches have been seen
#      by the model.

def get_timedelta_float(t):
    return t.total_seconds() / timedelta(days=1).total_seconds()

def parse_batch(batch):
    data = []
    labels = []
    for customer in batch:
        transactions = customer["costs"]
        values = map(lambda x : (x["currencyAmount"], dateutil.parser.parse(x["originationDateTime"])), transactions)
        values = sorted(values, key=lambda x : x[-1])
        start = values[0][-1]
        values = [(v[0], get_timedelta_float(v[-1] - start)) for v in values]
        x = [v[-1] for v in values]
        y = [v[0] for v in values]
        fcubic = interpolate.interp1d(np.array(x), np.array(y), kind='linear')
        
        xnew = np.arange(0.000, int(max(x)))
        sequence = savgol_filter(fcubic(xnew), SAVGOL_WINDOW, SAVGOL_ORDER)
        d, l = univariate_data(sequence, HISTORY_SIZE, TARGET_SIZE)
        data.extend(d)
        labels.extend(l)

    return zip(numpy_batch(data, BATCH_SIZE), numpy_batch(labels, BATCH_SIZE))


def univariate_data(dataset, history_size, target_size):
  data = []
  labels = []

  start_index = history_size
  end_index = len(dataset) - target_size

  for i in range(start_index, end_index):
    indices = range(i-history_size, i)
    # Reshape data from (history_size,) to (history_size, 1)
    data.append(np.reshape(dataset[indices], (history_size, 1)))
    labels.append(dataset[i+target_size])
  return (data, labels)


def load_data(filenames, customer_size=1):

      def gen_function():
            for f in filenames:
                  with open(f, "r") as fp:
                        data = json.load(fp)
                  batched_data = batch(data, n=int(len(data)/customer_size))
                  for b in batched_data:
                       for r in parse_batch(b):
                           print(r[0].shape, r[1].shape)
                           yield r
      return gen_function()
