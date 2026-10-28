# DevOps 30-Minute Learning Log

**Day: 27 October 2026**  
**Topic: Deploying a data science API with FastAPI and Docker**  

**Task completed:**
- Create app.py for FastAPI application with model for prediction
- Create requirement.txt file
- Create Dockerfile
- Build image and run container, successfully run in http://0.0.0.0:8000

**Commands and configuration:**  
- Add fastapi and uvicorn[standard] in requirement.txt
- Use python 3.15 slim image
- docker build -t fastapi-app .
- docker run -p 8000:8000 fastapi-app

**Problem encountered:**  
- Cannot completed to build the image cause cannot find requirement pickle, fixing it by remove pickle from requirement.txt
- Able to build image but cannot run container, error was in CMD line in Dockerfile ("uvicorn"), fix by adding "uvicorn" inside requirement.txt

**My takeaway:**
- In this session I learnt how to containerize a FastAPI application, how to config, build the image and run the cotainer with uvicorn command

**Next action:**  
- Setting up Kubernetes 