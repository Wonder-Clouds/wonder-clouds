from pydantic import BaseModel, EmailStr
from typing import Literal
from .credential import Credential
import uuid


class Client(BaseModel):
    id: uuid.UUID
    first_name: str
    last_name: str
    document_number: str
    document_type: Literal['ruc', 'dni'] = 'ruc'
    phone: str
    email: EmailStr
    credentials: list[Credential]
