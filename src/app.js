const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routers/book.routers');
const booksRoutes = require('./routers/books.router');
const errorHandling = require('./error/errorHandling')

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', booksRoutes);

app.use(function(req, res, next) {
    res.status(404).json({
        error: true,
        codigo: 404,
        message: "Endpoint doesn't found"
    });
});

app.use(errorHandling);
module.exports = app;
