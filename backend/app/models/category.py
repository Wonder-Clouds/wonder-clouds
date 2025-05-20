from sqlmodel import Field, SQLModel


class Category(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str = Field(index=True)
    