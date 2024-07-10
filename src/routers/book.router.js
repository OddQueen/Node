const express = require('express');
const { getBook, addBook, updateBook, deleteBook } = require('../controllers/book.controller');
const router = express.Router();

router.get('/book', getBook);
router.post('/book', addBook);
router.put('/book', updateBook);
router.delete('/book', deleteBook);

module.exports = router;
