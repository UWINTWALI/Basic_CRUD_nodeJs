# Basic CRUD Application with Node.js and MySQL

# This project demonstrates how to create a basic CRUD (Create, Read, Update, Delete) application using Node.js and MySQL. The application includes endpoints for creating, reading, updating, and deleting user records from a MySQL database.

# Prerequisites
# - Node.js
# - MySQL

# Installation

# 1. Clone the repository:
git clone https://github.com/yourusername/basic-crud-node-mysql.git
cd basic-crud-node-mysql

# 2. Install dependencies:
npm install

# 3. Set up environment variables:
# Create a `.env` file in the root directory and add the following:

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_user_password

DB_NAME=basic_crud

"with no space btn LHS & RHS"

# 4. Set up the database:
# Connect to your MySQL server and run the following commands to create the database and `users` table:
mysql -u your_database_user -p -e "
CREATE DATABASE basic_crud;
USE basic_crud;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL,
    country VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(id)
);"

# Running the Application
# Start the server by running:
node index.js

# The server will be listening at `http://127.0.0.1:3000`.

# API Endpoints

# Create a User
# URL: `/users`
# Method: `POST`
# Request Body:
# {
#     "name": "Jean de Dieu UWINTWALI",
#     "address": "123 Main St",
#     "country": "Kigali - Rwanda"
# }
# Success Response:
# {
#     "message": "User created successfully!"
# }

# Get All Users
# URL: `/users`
# Method: `GET`
# Success Response:
# {
#     "users": [
#         {
#             "id": 1,
#             "name": "Jean de Dieu UWINTWALI",
#             "address": "123 Main St",
#             "country": "Kigali - Rwanda"
#         },
#         ...
#     ]
# }

# Get a User by ID
# URL: `/user/:id`
# Method: `GET`
# Success Response:
# {
#     "user": {
#         "id": 1,
#         "name": "Jean de Dieu UWINTWALI",
#         "address": "123 Main St",
#         "country": "Kigali - Rwanda"
#     }
# }

# Update a User
# URL: `/user/:id`
# Method: `PATCH`
# Request Body:
# {
#     "name": "Jean Mucyo",
#     "address": "456 kv St",
#     "country": "Rulindo"
# }
# Success Response:
# {
#     "message": "Updated!"
# }

# Delete a User
# URL: `/user/:id`
# Method: `DELETE`
# Success Response:
# {
#     "message": "User Deleted successfully!"
# }

# Notes
# - Ensure you have MySQL installed and running.
# - The database connection details should match those provided in the `.env` file.
# - Use Postman or any API testing tool to test the endpoints.

# Feel free to fork the repository and make improvements or use it as a template for your own projects. If you encounter any issues or have suggestions, please open an issue or pull request. Happy coding!
