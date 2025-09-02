from pathlib import Path

from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

# Mount the frontend in the fastapi app
def mount_frontend(app: FastAPI):
    archive1_path = Path(__file__).parent.parent / "archive1" / "dist"
    app.mount(
        "/archive1", StaticFiles(directory=archive1_path, html=True), name="archive1"
    )
    print("loaded archive1")

    archive2_path = Path(__file__).parent.parent / "archive2" / "dist"
    app.mount(
        "/archive2", StaticFiles(directory=archive2_path, html=True), name="archive2"
    )
    print("loaded archive2")
