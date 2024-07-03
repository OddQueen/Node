const express = require('express');
const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('src/controllers/book.controller');
const router = express.Router();

router.get('/books', getBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
