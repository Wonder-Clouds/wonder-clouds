from pydantic import BaseModel
from typing import Literal
import uuid


class User(BaseModel):
    id: uuid.UUID
    name: str
    username: str
    password: str
    rol: Literal['user', 'admin'] = 'user'
