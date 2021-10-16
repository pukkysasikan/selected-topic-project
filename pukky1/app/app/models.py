from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from db_config import meta ,engine

storys = Table('storys', meta,
    Column('id', Integer, unique=True, primary_key=True),
    Column('Author',String(255), nullable=False),
    Column('title', String(255), nullable=False),
    Column('desc', String(255)),
    Column('article', String(255)),
    Column('secret', String(255), nullable=False), # image password for edit and remove
    Column('image', String(65000))
)

meta.create_all(engine)