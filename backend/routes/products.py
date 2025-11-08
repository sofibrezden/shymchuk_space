from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from models import db, Product

product_bp = Blueprint("product_bp", __name__)


@product_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])


@product_bp.route('/<uuid:product_id>', methods=["GET"])
def get_products_by_id(product_id):
    item = Product.query.get_or_404(product_id)
    return jsonify({
        "id": item.id,
        "title": item.title,
        "category": item.category,
        "description": item.description,
        "image_url": item.image_url,
        "created_at": item.created_at.isoformat()
    })


@product_bp.route("/", methods=["POST"])
@login_required
def create_product():
    data = request.json
    product = Product(**data)
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201


@product_bp.route("/<uuid:product_id>", methods=["PUT"])
@login_required
def update_product(product_id):
    product = Product.query.get_or_404(product_id)
    for key, value in request.json.items():
        setattr(product, key, value)
    db.session.commit()
    return jsonify(product.to_dict())


@product_bp.route("/<uuid:product_id>", methods=["DELETE"])
@login_required
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return '', 204
