from sqlmodel import Field, SQLModel
import datetime


class Credential(SQLModel, table=True):
    id: int = Field(primary_key=True)
    link: str
    username: str
    password: str
    renovation_date: datetime.date
    detail: str
    