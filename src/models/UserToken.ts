import mongoose, { Schema } from "mongoose";

const UserTokenSchema: Schema = new mongoose.Schema({
    Token: {
        type: String,
        required: true,
    },
    EmailAddress: {
        type: String,
        required: true,
    }
});

const UserToken = mongoose.model("UserToken", UserTokenSchema);

export default UserToken;
