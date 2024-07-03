const express = require('express');
const { getBooks, getBooksById, addBooks, updateBooks, deleteBooks } = require('../controllers/new.book.controller');
const router = express.Router();


router.get('/books/:id', getBooksById); 
router.get('/books', getBooks);
router.post('/books', addBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks);

module.exports = router;
