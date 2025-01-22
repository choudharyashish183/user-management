## User Management Application
This project is a simple web application that allows users to view, add, edit, and delete user details. The backend is built with Node.js, and the frontend uses React.js. Data is fetched and manipulated via the JSONPlaceholder API.

## Features
. View Users: Displays a list of users with details such as ID, First Name, Last Name, Email, and Department.

. Add User: Allows adding a new user by filling out a form.

. Edit User: Updates existing user details by fetching the current data.

. Delete User: Removes a user from the list.

. Error Handling: Displays appropriate error messages if API requests fail.

## Technologies Used
## Backend
. Node.js

. Express.js . CORS

## Frontend
React.js Axios HTML & CSS Material- ui

## Getting Started
Prerequisites
Node.js installed on your machine

A package manager like npm or yarn

## Installation
Clone the repository: [cd user-managment](https://github.com/choudharyashish183/user-management.git)

## backend
cd backend npm run dev The backend server will run on http

## frontend
cd frontend npm run start The backend server will run on http

## API Endpoints
## Backend Endpoints
GET /api/users: Fetch all users

POST /api/users: Add a new user

PUT /api/users/:id: Update an existing user

DELETE /api/users/:id: Delete a user

## External API
JSONPlaceholder: https://jsonplaceholder.typicode.com/users

## Future Improvements
Add authentication and authorization.

Enhance error handling and validation.

Improve UI/UX design.

Use a real backend API for persistent data storage.
