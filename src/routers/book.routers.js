const express = require('express');
const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/book.controller');
const router = express.Router();


router.get('/books/:id', getBookById); 
router.get('/books', getBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
