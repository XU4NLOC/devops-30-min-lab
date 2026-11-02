# DevOps 30-Minute Learning Log

**Day: 15 October 2026**  
**Topic: Dockerize a web application with MySQL Database**  

**Task completed:**  
- Initiated web server with Flask frontend
- Created Dockerfile for Flask
- Created Docker compose for Flask and MySQL service
- Built image and ran containers for bother service

**Commands and configuration:**  
- install pip if did not install yet to test the web server
- pip freeze > requirement.txt
- docker init, check the generated file and fix, add MySQL service in compose.yml
- docker compose up --build

**Problem encountered:**  
- Unable to run docker compose dude to error run command to install requirement because the generated docker file did not copy the requirement, and incorrect requirement.txt file which leads to build failure
- Access denied when accessing Flask web because port 5000 is used in local machine, fixed by changing to 5001

**My takeaway:**  
- In this session I get to understand on working with Flask web server with Docker, revised knowledge about Docker CLI for tracking container error logs, track TCP port

**Next action:**  
- Dockerizing a machine learning model with TensorFlow
