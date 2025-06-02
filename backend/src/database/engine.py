from sqlmodel import create_engine, Session
from sqlalchemy import URL


# Engine
url_object = URL.create(
    "postgresql+psycopg2",
    username="monchi789",
    password="1234",
    host="localhost",
    database="db_wonder"
)
engine = create_engine(url_object, echo=True)

# Session
def get_session():
    with Session(engine) as session:
        yield session
