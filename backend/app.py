from flask import Flask
from config import Config
from models import db, News, Admin as AdminModel, Product
from admin_views import SecureModelView, SecureAdminIndexView, AdminReadOnlyView
from flask_admin import Admin
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.news import news_bp
from routes.admin import admin_bp
from routes.products import product_bp
from uuid import UUID

login_manager = LoginManager()
jwt = JWTManager()
cors = CORS()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    cors.init_app(app, supports_credentials=True)
    login_manager.init_app(app)
    app.register_blueprint(news_bp, url_prefix='/api/news')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')
    app.register_blueprint(product_bp, url_prefix='/api/products')

    admin_ui = Admin(
        app,
        name="Admin UI",
        template_mode='bootstrap4',
        url='/admin-ui',
        index_view=SecureAdminIndexView(name=None,url='/admin-ui')
    )

    admin_ui.add_view(SecureModelView(News, db.session, name='News', endpoint='admin_news'))
    admin_ui.add_view(AdminReadOnlyView(AdminModel, db.session, name='Admins', endpoint='admins'))
    admin_ui.add_view(SecureModelView(Product, db.session, name="Products", endpoint="admin_products"))

    @login_manager.user_loader
    def load_user(user_id):
        try:
            return AdminModel.query.get(UUID(user_id))
        except ValueError:
            return None

    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
