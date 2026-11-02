# DevOps 30-Minute Learning Log

**Day: 2 November 2026**  
**Topic: Deploy applications with Kubenetes CLI**

**Task completed:**
- Create a sample deployment
- Expose the deployment on port 8080
- View and access the service in localhost

**Commands and configuration:**  
- kubectl create deployment hello-minikube --image=kicbase/echo-server:1.0
- kubectl expose deployment hello-minikube --type=NodePort --port=8080
- Check minikube status: ```minikube status```
- kubectl get services hello-minikube

**Problem encountered:**  
- Unable to deploy the service on first time running the command due to connection refused. Debugged by checking minikube status to see if it is running or stop

**My takeaway:**
- In this session I able to learn how to create, deploy and access a service using minikube and kubernetes CLI. This is a service where I can see the request metadata changing whenever I change the endpoint

**Next action:**  
- Deploy a LoadBalancer with Kubenetes CLI 