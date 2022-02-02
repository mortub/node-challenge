import express from 'express';
import passport from 'passport';
const booksRouter = express.Router();

booksRouter.get('/books', passport.authenticate('bearer', { session: false }),(req, res) => {
    res.send('get /books');
});
export { booksRouter };