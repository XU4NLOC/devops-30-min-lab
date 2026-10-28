# DevOps 30-Minute Learning Log

**Day: 28 October 2026**  
**Topic: Setting up Kubernetes**

**Task completed:**
- Conduct research about Kubernetes
- Download Kubernetes CLI
- Validate the kubectl with checksum file
- Add execute permission for the file
- Remove the checksum file

**Commands and configuration:**  
- curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
- curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl.sha256"
- echo "$(cat kubectl.sha256)  kubectl" | shasum -a 256 --check
- chmod +x ./kubectl
- sudo mv ./kubectl /usr/local/bin/kubectl && sudo chown root: /usr/local/bin/kubectl
- rm kubectl.sha256

- Or just ```brew install kubectl```

**Problem encountered:**  
- N/A

**My takeaway:**
- In this session I read documentation and learn about Kubernetes, which is a great platform to manage dockerized services and workloads. Kubernetes CLI is installed in this session which is a tool allows me to deploy applications, inspect and manage cluster resources, and view logs.

**Next action:**  
- Setting up 'minikube'