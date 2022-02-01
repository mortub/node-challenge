import mongoose from "mongoose";

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

const Book = mongoose.model("Book", BookSchema);

export default Book;