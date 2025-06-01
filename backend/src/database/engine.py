from sqlmodel import create_engine
from sqlalchemy import URL

url_object = URL.create(
    "postgresql+psycopg2",
    username="monchi789",
    password="1234",
    host="localhost",
    database="wonder_database"
)

engine = create_engine(url_object, echo=True)

