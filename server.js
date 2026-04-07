const express = require("express");
const app = express();

const PORT = 3000;

// Sample data
const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" }
];

const authors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Robert Kiyosaki" },
  { id: 3, name: "Paulo Coelho" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API 📚");
});

// Books route
app.get("/books", (req, res) => {
  res.json(books);
});

// Single book
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.send("Book not found");
  }
});

// Authors route
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Single author
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (author) {
    res.json(author);
  } else {
    res.send("Author not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});