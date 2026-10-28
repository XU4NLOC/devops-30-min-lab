# DevOps 30-Minute Learning Log

**Day: 20 October 2026**  
**Topic: Dockerizing a deep learning pipeline with PyTorch**  

**Task completed:**
- Create model.py file for PyTorch
- Create requirement.txt and add "pytorch"
- Create Dockerfile
- Build image and run container

**Commands and configuration:**  
- In Python script use resnet18 pre-trained model
- Choose the newest image tag version: 2.14.1-cuda12.6-cudnn9-devel
- docker build -t pytorch-model .
- docker run pytorch-model

**Problem encountered:**  
- FROM pytorch/pytorch:pytorch/pytorch:2.14.1-cuda12.6-cudnn9-devel was an invalid reference format, changed back to FROM pytorch/pytorch:2.14.1-cuda12.6-cudnn9-devel

**My takeaway:**
- In this session I learnt how to containerize a deep learning pipeline using PyTorch which help me expand my knowledge about PyTorch, which is an open-source deep-learning framework.

**Next action:**  
- Automating data pipelines with Apache Airflow and Docker