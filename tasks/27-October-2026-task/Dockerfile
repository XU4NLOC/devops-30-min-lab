ARG PYTHON_VERSION=3.15.0
FROM python:${PYTHON_VERSION}-slim

WORKDIR /app

COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code into the container.
COPY . .

EXPOSE 8000

# Run the application.
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
