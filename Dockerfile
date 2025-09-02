# =================================================================
# Stage 1: Build the React Frontend (named 'builder')
# =================================================================
FROM node:20-alpine AS builder

WORKDIR /app/archive1
COPY archive1/package*.json ./
RUN npm install
COPY archive1/ ./
RUN npm run build

WORKDIR /app/archive2
COPY archive2/package*.json ./
RUN npm install
COPY archive2/ ./
RUN npm run build


# =================================================================
# Stage 2: Build the Final Python Production Image
# =================================================================
FROM python:3.12-slim

# Set the working directory for the final app
WORKDIR /app

# Copy and install Python dependencies
COPY api/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the FastAPI backend code
COPY ./api /app/api

# **The key step**: Copy the built frontend from the 'builder' stage
COPY --from=builder /app/archive1/dist /app/archive1/dist
COPY --from=builder /app/archive2/dist /app/archive2/dist

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the Uvicorn server
CMD ["uvicorn", "api.__main__:app", "--host", "0.0.0.0", "--port", "8080"]