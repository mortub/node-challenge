import express from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post('/users/signin', (req, res) => {
    res.send(req.body);
});

usersRouter.post('/users/create',usersController.createUserController);

export { usersRouter };