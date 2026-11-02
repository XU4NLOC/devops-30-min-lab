# DevOps 30-Minute Learning Log

**Day: 12 October 2026**  
**Topic: Dockerize a Java Springboot Application**  

**Task completed:**  
- Created a Java Springboot application via Spring initializer
- Configured Java version, Spring CLI and dependencies
- Successfully build the Sringboot Application and run in localhost:8080
- Create a Dockerfile, reviewed and create Docker compose
- Successfully build the Docker image and run the container
- The container runs in localhost:8080

**Commands and configuration:**  
- brew upgrade && brew update
- java -version (if not available -> install java)
- brew install openjdk
- brew install maven
- brew tap spring-io/tap && brew install spring-boot
- Run the application: mvn springboot:run
- Create Docker file using docker init
- Review and reconfigured the Dockerfile


**Problem encountered:**  
- Dockerfile created from docker init command failed to build image, the problem was Unsupported jarmode 'layertools' (this is a problem when using docker init command, remember to review and fix the Dockerfile)
- Created a new Dockerfile and still failed because in pom.xml indicate java version 25 while Dockerfile indicate 17

**My takeaway:**  
In this session I revised my knowledge about initializing Java Springboot application
Revised knowledge about Docker and carefully check configuration files for correct versions.


**Next action:**  
Dockerize React frontend application
