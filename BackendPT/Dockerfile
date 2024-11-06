# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies (this will only run if package.json or package-lock.json changes)
RUN npm install

# Copy Prisma schema and generate Prisma client for Linux environment
# COPY prisma ./prisma
# RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "run", "backend"]
