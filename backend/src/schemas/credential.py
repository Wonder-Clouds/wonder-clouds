from pydantic import BaseModel
import datetime


class Credential(BaseModel):
    id: int
    link: str
    username: str
    password: str
    renovation_date: datetime.date
    detail: str
