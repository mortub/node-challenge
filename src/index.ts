import express from 'express';
import mongoose  from "mongoose";

import { usersRouter } from './routes/Users';
import { booksRouter } from './routes/Books';
const router = express.Router();
const app = express();

app.use(router,usersRouter);
app.use(router,booksRouter);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})