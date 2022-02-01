import express from 'express';
const booksRouter = express.Router();

booksRouter.get('/books', (req, res) => {
    res.send('get /books');
});

export { booksRouter };