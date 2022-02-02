import express from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post('/users/signin',usersController.signinHandler);

usersRouter.post('/users/create',usersController.createUserHandler);

export { usersRouter };