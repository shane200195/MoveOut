from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM, GRU
from gru_data import load_data


FILENAME_TRAIN = "Group_raw_customers_transactions_0.json"
FILENAME_EVAL = "Group_raw_customers_transactions_1.json"
SHUFFLE = True
BATCH_SIZE = 100
HISTORY_SIZE = 60

# Build Model
model_gru = Sequential()
model_gru.add(GRU(units=75, return_sequences=True, input_shape=(HISTORY_SIZE,1)))
model_gru.add(GRU(units=30, return_sequences=True))
model_gru.add(GRU(units=30, return_sequences=True))

model_gru.compile(loss='mae', optimizer='adam')
print("[INFO] - Model Compiled")

# Train
gru_history = model_gru.fit_generator(
    load_data([FILENAME_TRAIN]),
    validation_data=load_data([FILENAME_EVAL]),
    steps_per_epoch=1000,
    validation_steps=10,
    epochs=10,
    verbose=2,
    shuffle=SHUFFLE
)
print("[INFO] - Model Trained.")
print(f"[INFO] - Results: {gru_history}.")

# Save Model
model_gru.save('gru_model.h5')
print("[INFO] - Model Saved.")
## How to load the model back
## model_gru = load_model('my_model.h5')
