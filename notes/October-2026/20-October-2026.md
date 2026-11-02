# DevOps 30-Minute Learning Log

**Day: 20 October 2026**  
**Topic: Multi-stage build for a Node.js application**  

**Task completed:**
- Initialize Node.js application, create index.js
- Successfully run the application on localhost:3000
- Create a Dockerfile

**Commands and configuration:**  
- npm init -y
- npm install express (if have not installed)
- add start script in package.json
- docker build -t node-multi-stage .
- docker run -p 3000:3000 node-multi-stage

**Problem encountered:**  
- The first Dockerfile was able to build the image but unable to run the container because Node.js version 14 was used which is outdated. 

**My takeaway:**
- In this session I revised my knowledge about multi-stage build, run, etc. stages in Docker, which is convinient for further learning and development, also more cautious about the version of tech-stack.

**Next action:**  
- Reducing a Docker image size for a Python application