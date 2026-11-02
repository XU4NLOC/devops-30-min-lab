ARG NODE_VERSION=26.11.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV=dev
ENV PORT=5173

USER root
WORKDIR /home/node/app
COPY package*.json ./

# Download dependencies as a separate step to take advantage of Docker's caching.
RUN npm install

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image, owned by the runtime user.
COPY --chown=node:node . .

# Expose the port that the application listens on.
EXPOSE ${PORT}

# Run the application.
CMD ["npm", "run", "dev", "--", "--configLoader", "runner"]