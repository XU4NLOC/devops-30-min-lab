ARG NODE_VERSION=26.11.1

FROM node:${NODE_VERSION}-alpine

# # Use production node environment by default.
# ENV NODE_ENV production



# Run the application as a non-root user.
USER root
WORKDIR /home/node/app
COPY package*.json ./


RUN npm install

# Copy the rest of the source files into the image.
COPY --chown=node:node . .

# Create persistent storage directory
RUN mkdir -p /app/data

ENV DATA_DIR=/app/data

# Expose the port that the application listens on.
EXPOSE 3001

# Run the application.
CMD ["node", "src/index.js"]
