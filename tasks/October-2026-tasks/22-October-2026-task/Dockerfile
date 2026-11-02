FROM pytorch/pytorch:2.14.1-cuda12.6-cudnn9-devel
WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY model.py .

CMD ["python", "model.py"]