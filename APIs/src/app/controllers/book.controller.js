const Book = require('../models/Book');

let book = null;

function getBook(req, res) {
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

function addBook(req, res) {
    const { id_book, id_user, title, type, author, price, photo } = req.body;
    book = new Book(id_book, id_user, title, type, author, price, photo);
    res.status(201).json(book);
}

function updateBook(req, res) {
    const { id_user, title, type, author, price, photo } = req.body;
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
}

function deleteBook(req, res) {
    if (book) {
        book = null;
        res.status(200).json({ message: 'Book deleted' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

module.exports = { getBook, addBook, updateBook, deleteBook };
