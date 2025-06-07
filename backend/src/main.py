from fastapi import FastAPI
from .api.v1 import category
from sqlmodel import SQLModel
from .database.engine import engine
from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(lifespan=lifespan)

app.include_router(category.router, prefix="/v1", tags=["Category"])
