# DevOps 30-Minute Learning Log

**Day: 14 October 2026**  
**Topic: Dockerize a Full-stack Application**  

**Task completed:**  
- Initiated a full-stack to-do list application
- Run and tested frontend and backend
- Created Dockerfile, created image, run container successfully for frontend
- Created Dockerfile, created image, run container successfully for backend
- Created a compose file connecting both services in the root directory, not each service folders
- A persistent volume for backend task storage

**Commands and configuration:**  
- Configure env for backend and frontend to connect to each other, api and proxy, create /data directory to store the tasks data
- docker init for the backend folder and the frontend folder, delete docker-compose.yml on each folder
- Review the Dockerfile, config directory and user permission

**Problem encountered:**  
- First problem occured was the frontend was failed to run in the container due to the missing plugins in vite.config.js and runtime error based on users
- Second problem was Dockerfile was unable to run container for backend due to denied permission of a user to create the /data directory

**My takeaway:**  
In this session I was able to enhance my knowledge about user permissions, and able to config it directly in Dockerfile

**Next action:**  
Dockerize a full-stack application with database configuration
