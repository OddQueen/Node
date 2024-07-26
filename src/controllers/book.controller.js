const Book = require('../models/Book');

let book = [
    new Book(397020, 1, 'El principito', 'Tapa blanda', 'Antoine de Saint-Exupéry', 12.99, 'assets/img/principito.png'),
    new Book(304920, 1, 'Orgullo y prejuicio', 'Tapa dura', 'Jane Austen', 19.99, 'assets/img/orgullo.png'),
    new Book(301479, 1, 'Diario de Ana Frank', 'Tapa blanda', 'Ana Frank', 15.99, 'assets/img/ana frank.png')
  ];

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
