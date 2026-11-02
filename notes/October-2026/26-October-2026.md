# DevOps 30-Minute Learning Log

**Day: 26 October 2026**  
**Topic: Automating data pipelines with Apache Airflow and Docker**  

**Task completed:**
- Conduct research about Apache Airflow
- Fetch the sample compose file from official website to practice with it
- Build the image and run the container
- The websever successfully run in localhost:8080

**Commands and configuration:**  
- curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.3.3/docker-compose.yaml'
- docker-compose up
- docker-compose --profile flower up (use this command to test the flower )
- docker-compose down --volumes --remove-orphans (to clean up the environment)

**Problem encountered:**  
- N/A

**My takeaway:**
- In this session I've a chance to learn about Apache Airflow which is a tool for orchestrating complex workflows widely used in data engineering, using PosgreSQL for database and Redis for caching. Apache Airflow is great for scheduling, automate data pipeline, and monitor workflows.

**Next action:**  
- Deploying a data science API with FastAPI and Docker