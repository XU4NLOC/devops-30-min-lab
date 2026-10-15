# DevOps 30-Minute Learning Log

**Day: 13 October 2026**  
**Topic: Dockerize a NextJS Application**  

**Task completed:**  
- Initialized NextJS frontend application
- Built and ran the frontend locally
- Created Dockerfile, compose.yaml
- Created image and ran the container, the frontend run successfully

**Commands and configuration:**  
- Create NextJS app via npx create-next-app@latest
- Run npm install and npm run build
- Run npm start to view the frontend locally
- docker init to create the Dockerfile
- Configure standalone in next.config.ts
- Review and reconfigured the Dockerfile
- Build image: docker build -t next-frontend .
- Run the container: docker run -p 3000:3000 next-frontend

**Problem encountered:**  
- When first run the frontend after containerized it, the NextJS icon did not show, root cause was the Dockerfile did not copy the public directory from the frontend code folder

**My takeaway:**  
- After today session I revised my knowledge about creating NextJS application, containerizing a frontend app
- Remember to configure standalone in next.config.ts, copy the asset carefully in Dockerfile

**Next action:**  
Dockerize a full-stack application
