from sqlmodel import Field, SQLModel
from .credential import Credential
import uuid


class Client(SQLModel, table=True):
    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    first_name: str
    last_name: str
    document_number: str
    document_type: str
    phone: str
    email: str = Field(index=True)
    credentials: int = Field(foreign_key='category.id')
    