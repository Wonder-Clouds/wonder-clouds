from sqlmodel import SQLModel, Field
from .category import Category
import datetime
import uuid


class Publication(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(index=True)
    content: str
    published: bool = Field(default=False)
    cover: str
    publish_date: datetime.date
    category: int = Field(foreign_key='category.id')
