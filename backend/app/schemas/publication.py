from pydantic import BaseModel
from .category import Category
import datetime


class Publication(BaseModel):
    id: int
    title: str
    content: str
    published: bool
    cover: str
    publish_date: datetime.date
    category: Category
