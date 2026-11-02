# DevOps 30-Minute Learning Log

**Day: 19 October 2026**  
**Topic: Creating a data science environment with Jupyter and Docker**  

**Task completed:** 
- Research about Jupyter lab
- Create a Dockerfile
- Create the Docker image and run the container
- Create a Docker compose file
- Stop the Docker container run from the image and run using Docker compose

**Commands and configuration:**  
- docker build -t my-jupyter-lab .
- docker run --rm -p 8889.8888 my-jupyter-lab start-notebook.py --NotebookApp.token='my-token'

**Problem encountered:**  
- Error line 3 in Dockerfile failed to run command pip install because of syntax error
- Failed to run the container because no port forwarding in command and no token, fixed by fixing command: adding port forwarding and token

**My takeaway:**
- In this session I was able to learn how to run Jupyter lab using Dockerfile and Docker Compose, which made it easier to access rather then using Anaconda.
- Using Dockerfile for Jupyter lab makes it easier to manage dependencies.

**Next action:**  
- Multi-stage build for a Node.js application