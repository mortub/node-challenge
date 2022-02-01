import express from 'express';
import mongoose  from "mongoose";
import config from './config/config';
import bodyParser from 'body-parser';

import { usersRouter } from './routes/Users';
import { booksRouter } from './routes/Books';
const router = express.Router();
const app = express();

mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(bodyParser.json());
app.use(router,usersRouter);
app.use(router,booksRouter);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})