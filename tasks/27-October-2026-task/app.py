from fastapi import FastAPI
import pickle
 
app = FastAPI()
with open("model.pkl", "rb") as f:
   model = pickle.load(f)
 
@app.post("/predict/")
def predict(data: list):
   return {"prediction": model.predict(data)}