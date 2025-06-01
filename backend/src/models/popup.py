from sqlmodel import Field, SQLModel


class PopUp(SQLModel, table=True):
    id: int = Field(primary_key=True)
    image: str
    status: bool = Field(default=False)
    