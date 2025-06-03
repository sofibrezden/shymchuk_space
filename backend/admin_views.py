from flask_admin import AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask import redirect, url_for
from flask_login import current_user

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

class AdminReadOnlyView(ModelView):
    can_create = False
    can_edit = False
    can_delete = True
    column_list = ('username', 'updated_at')
    column_labels = {
        'username': 'Name',
        'updated_at': 'Last changes',
    }

    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('admin_bp.admin_login'))