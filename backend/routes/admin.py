from flask import Blueprint, request, jsonify, redirect
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import check_password_hash
from models import Admin as AdminModel

admin_bp = Blueprint('admin_bp', __name__)

@admin_bp.route('/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = AdminModel.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        login_user(user)
        return jsonify({"message": "Успішний вхід"}), 200

    return jsonify({"error": "Невірний логін або пароль"}), 401

@admin_bp.route('/logout')
@login_required
def admin_logout():
    logout_user()
    return jsonify({"message": "Вихід успішний"}), 200
