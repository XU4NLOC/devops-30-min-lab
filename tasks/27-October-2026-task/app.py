from fastapi import FastAPI

# Create the FastAPI application instance
app = FastAPI(title="My Dockerized API")

# Define a simple root endpoint
@app.get("/")
def read_root():
    return {"message": "Hello from Docker!"}

# Define a health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}