from django.contrib import admin
from todo_app.models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)