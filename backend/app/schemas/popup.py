from pydantic import BaseModel


class PopUp(BaseModel):
    id: int
    image: str
    status: bool