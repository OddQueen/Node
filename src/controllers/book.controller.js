const Book = require('../models/Book');

let books = [];

function getBooks (req, res) {
    res.status(200).json(books);
};

function addBook (req, res) {
    let { id_book, id_user, title, type, author, price, photo } = req.body;
    let newBook = new Book(id_book, id_user, title, type, author, price, photo);
    books.push(newBook);
    res.status(201).json(newBook);
};

function updateBook (req, res) {
    const { id } = req.params;
    const { id_user, title, type, author, price, photo } = req.body;
    const book = books.find(b => b.id_book == id);
    if (book) {
        book.id_user = id_user;
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

function deleteBook (req, res) {
    const { id } = req.params;
    const index = books.findIndex(b => b.id_book == id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(200).json({ message: 'Book deleted' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };