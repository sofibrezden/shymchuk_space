from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()

class News(db.Model):
    __tablename__ = 'news'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    image_url = db.Column(db.String(300), nullable=True)

    def __repr__(self):
        return f"<News {self.title}>"

class Admin(db.Model, UserMixin):
    __tablename__ = 'admins'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)  # hashed
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    def __repr__(self):
        return f"<Admin {self.username}>"

class Product(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = db.Column(db.String(120), nullable=False)
    category = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=True)
    image_url = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "category": self.category,
            "description": self.description,
            "image_url": self.image_url,
            "created_at": self.created_at.isoformat()
        }
