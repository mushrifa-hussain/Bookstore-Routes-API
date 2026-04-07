# Route Master - Express Bookstore API

This project is a simple Node.js and Express application that demonstrates how routing works in a backend server. The application simulates a basic bookstore system with routes for retrieving information about books and authors.

## Features

* Express server setup
* Routes for books and authors
* Dynamic route parameters
* JSON responses for API requests

## Technologies Used

* Node.js
* Express.js

## Project Structure

Route-Master
│
├── server.js
├── package.json
└── README.md

## Installation

Clone the repository

git clone https://github.com/mushrifa-hussain/Express-Route-Master.git

Navigate into the project folder

cd Express-Route-Master

Install dependencies

npm install

## Running the Server

Start the server using:

node server.js

The server will run on:

http://localhost:3000

## Available Routes

Home Route
GET /

Books Routes
GET /books
Returns the list of books.

GET /books/:id
Returns a specific book based on its ID.

Authors Routes
GET /authors
Returns the list of authors.

GET /authors/:id
Returns a specific author based on its ID.

## Learning Outcome

This project helped in understanding how Express routing works and how backend APIs handle different endpoints and requests.

## Author

Mushrifa Hussain
