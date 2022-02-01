import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    EmailAddress: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
