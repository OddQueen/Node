const Book = require('../models/Book');

let book = null;

function getBook(req, res) {
    let response;
    if (book) {
        response = { error: false, codigo: 200, data: book };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

function addBook(req, res) {
    const { id_book, id_user, title, type, author, price, photo } = req.body;
    book = new Book(id_book, id_user, title, type, author, price, photo);
    res.send({ error: false, codigo: 201, data: book });
}

function updateBook(req, res) {
    const { id_user, title, type, author, price, photo } = req.body;
    let response;
    if (book) {
        book.id_user = id_user;
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;
        response = { error: false, codigo: 200, data: book };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

function deleteBook(req, res) {
    let response;
    if (book) {
        book = null;
        response = { error: false, codigo: 200, mensaje: 'Book deleted' };
    } else {
        response = { error: true, codigo: 404, mensaje: 'Book not found' };
    }
    res.send(response);
}

module.exports = { getBook, addBook, updateBook, deleteBook };
