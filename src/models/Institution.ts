import mongoose from "mongoose";

const InstitutionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    URL: {
        type: String,
        required: true,
    },
    EmailDomain: {
        type: String,
        required: true,
    }
});

const Institution = mongoose.model("Institution", InstitutionSchema);

export default Institution;