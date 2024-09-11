# Use the official Node.js image
FROM node:20

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Expose port 5173 for Vite
EXPOSE 5173

# Run the web service on container startup
CMD ["npm", "run", "dev"]
