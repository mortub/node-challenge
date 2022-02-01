import mongoose from "mongoose";
import IBook from "../interfaces/IBook";

const BookSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true,
    }
});

const Book = mongoose.model<IBook>("Book", BookSchema);

export default Book;