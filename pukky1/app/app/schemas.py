from pydantic import BaseModel

class Story(BaseModel):
    Author: str
    title: str
    desc: str
    article: str
    secret: str
    image: str