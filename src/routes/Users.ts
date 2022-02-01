import express from 'express';

const usersRouter = express.Router();

usersRouter.post('/users/signin', (req, res) => {
    res.send('/users/signin');
});

usersRouter.post('/users/create', (req, res) => {
    res.send('/users/create');
});

export { usersRouter };