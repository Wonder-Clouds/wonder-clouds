from sqlmodel import Field, SQLModel
import uuid


class User(SQLModel, table=True):
    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    name: str = Field(index=True)
    username: str = Field(index=True, unique=True)
    password: str
    rol: str
