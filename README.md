## Introduction

This is a simple Todo application built off Django (including the Django REST Framework for API CRUD operations) and React. For a complete walkthrough, see [Build a To-Do application Using Django and React]

## Requirements
* Python
* React

## Getting started
1. Clone the project to your machine ```[git clone https://github.com/Abhi-AD/React-Django-Todo]```
2. Navigate into the diretory ```[cd React-Django-Todo]```
3. Source the virtual environment ```[pipenv shell]```
4. Install the dependencies ```[pipenv install]```
5. Navigate into the todo_frontend directory ```[cd todo_frontend]```
5. Install the dependencies ```[npm install]```

## Run the application
You will need two terminals pointed to the todo_frontend and todo_backend directories to start the servers for this application.

1. Run this command to start the todo_backend server in the ```[todo_backend]``` directory: ```[python manage.py runserver]``` (You have to run this command while you are sourced into the virtual environment)
2. Run this command to start the todo_frontend development server in the ```[todo_frontend]``` directory: ```[npm install]``` (This will start the todo_frontend on the adddress [localhost:3000](http://localhost:3000))

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.

## Creator Credit

This demo app was originally built for a scotch.io (acquired in 2020 by DigitalOcean) article by [Jordan Irabor](https://github.com/Abhi-AD/React-Django-Todo)