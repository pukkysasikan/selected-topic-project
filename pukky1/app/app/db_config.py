from sqlalchemy import create_engine , MetaData

user_name = "user"
password = "password"
host = "database"
database_name = "sample_db"

DATABASE = 'mysql+pymysql://%s:%s@%s/%s?charset=utf8' % (
    user_name,
    password,
    host,
    database_name,
)

engine = create_engine("sqlite:///sqlite.db")
#engine = create_engine(DATABASE, encoding="utf-8", echo=True)

meta = MetaData()

conn = engine.connect()