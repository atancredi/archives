from dotenv import load_dotenv

load_dotenv()
from os import environ as env
from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from .frontend import mount_frontend


API_PORT = 8080


# Lifespan context
@asynccontextmanager
async def lifespan(app: FastAPI):
    yield


# Define app
app = FastAPI(
    title="obviouschoide-radio-api",
    version="0.1.0",
    description="",
    redoc_url=None,
    openapi_url=None,
    lifespan=lifespan,
)


# Health
@app.get("/health")
async def health():
    return {"message": app.title + " " + str(app.version) + " Alive"}


# Mount frontend
mount_frontend(app)


# Redirect the root path "/" to the frontend
@app.get("/")
async def redirect_to_vite_app():
    return RedirectResponse(url="/archive1")


ws = uvicorn.Server(
    config=uvicorn.Config(
        app=app,
        port=int(API_PORT),
        host="0.0.0.0",
        log_level="info",
        log_config={
            "version": 1,
            "disable_existing_loggers": False,
        },
    )
)

if __name__ == "__main__":
    print("Ready to start")
    ws.run()
