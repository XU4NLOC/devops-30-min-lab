# Use an official Node.js runtime as a parent image
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build your Next.js app for production
RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm install next
# Start the application
CMD ["npm", "start"]