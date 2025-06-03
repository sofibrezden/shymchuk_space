from flask_admin import AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask import redirect, url_for
from flask_login import current_user
from werkzeug.security import generate_password_hash
from wtforms import PasswordField
from wtforms.fields import StringField
from wtforms.validators import InputRequired
from flask_wtf import FlaskForm


class AdminForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password')


class SecureModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('admin_bp.admin_login'))


class SecureAdminIndexView(AdminIndexView):
    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('admin_bp.admin_login'))


class AdminModelView(SecureModelView):
    form = AdminForm
    can_create = True
    can_edit = False
    can_delete = True

    column_list = ('username', 'updated_at')
    column_labels = {
        'username': 'Name',
        'updated_at': 'Last changes',
    }

    form_excluded_columns = ('password', 'updated_at')

    def on_model_change(self, form, model, is_created):
        if form.password.data:
            model.password = generate_password_hash(form.password.data)
        super().on_model_change(form, model, is_created)

    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('admin_bp.admin_login'))
