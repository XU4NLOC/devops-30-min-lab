import torch
model = torch.hub.load('pytorch/vision', 'resnet18', pretrained=True)
print("Model loaded successfully")