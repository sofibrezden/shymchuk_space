from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from models import db, News

news_bp = Blueprint('news', __name__)


@news_bp.route('/', methods=['GET'])
def get_all_news():
    news = News.query.order_by(News.date.desc()).all()
    return jsonify([
        {
            "id": item.id,
            "title": item.title,
            "content": item.content,
            "date": item.date.isoformat(),
            "image_url": item.image_url
        } for item in news
    ])


@news_bp.route('/<uuid:news_id>', methods=["GET"])
def get_news(news_id):
    item = News.query.get_or_404(news_id)
    return jsonify({
        "id": item.id,
        "title": item.title,
        "content": item.content,
        "date": item.date.isoformat(),
        "image_url": item.image_url
    })


@news_bp.route('/', methods=['POST'])
@jwt_required()
def create_news():
    data = request.get_json()
    if not data or not data.get('title') or not data.get('content'):
        return jsonify({"error": "title and content are required"}), 400

    new = News(
        title=data['title'],
        content=data['content'],
        image_url=data.get('image_url')
    )
    db.session.add(new)
    db.session.commit()

    return jsonify({"message": "News created", "id": new.id}), 201


@news_bp.route('/<uuid:news_id>', methods=["GET"])
@jwt_required()
def update_news(news_id):
    item = News.query.get_or_404(news_id)
    data = request.get_json()

    item.title = data.get('title', item.title)
    item.content = data.get('content', item.content)
    item.image_url = data.get('image_url', item.image_url)

    db.session.commit()
    return jsonify({"message": "News updated"}), 200


@news_bp.route('/<uuid:news_id>', methods=["GET"])
@jwt_required()
def delete_news(news_id):
    item = News.query.get_or_404(news_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({"message": "News deleted"}), 200
