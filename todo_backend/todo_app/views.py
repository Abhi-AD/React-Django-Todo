from django.shortcuts import render
from rest_framework import viewsets
from todo_app.serializers import TodoSerializer
from todo_app.models import Todo

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()