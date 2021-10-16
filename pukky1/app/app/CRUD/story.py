from fastapi import APIRouter
from db_config import conn
from models import storys
from schemas import Story

story = APIRouter()

@story.get("/story")
async def retrieve_all_story():
    return conn.execute(storys.select()).fetchall()

@story.get("/story/{id}")
async def retrieve_one_story(id: int):
    return conn.execute(storys.select().where(storys.c.id == id)).fetchall()

@story.post("/story")
async def send_story_data(sty: Story):
    conn.execute(storys.insert().values(
        Author = sty.Author,
        title = sty.title,
        desc = sty.desc,
        article = sty.article,
        secret = sty.secret,
        image = sty.image,
    ))
    return conn.execute(storys.select()).fetchall()

@story.put("/story/{id}")
async def update_story_data(id: int, sty: Story):
    conn.execute(storys.update().values(
        Author = sty.Author,
        title = sty.title,
        desc = sty.desc,
        article = sty.article,
    ).where(storys.c.id == id))
    return conn.execute(storys.select()).fetchall()

@story.delete("/story/{id}")
async def delete_story_data(id: int):
    conn.execute(storys.delete().where(storys.c.id == id))
    return conn.execute(storys.select()).fetchall()