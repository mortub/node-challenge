import mongoose from "mongoose";
import IInstitution from "../interfaces/IInstitution";

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

const Institution = mongoose.model<IInstitution>("Institution", InstitutionSchema);

export default Institution;