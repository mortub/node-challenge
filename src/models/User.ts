import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/IUser";

const UserSchema: Schema = new mongoose.Schema({
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

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
