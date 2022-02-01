import mongoose from "mongoose";

const InstitutionBookXRefSchema = new mongoose.Schema({
    BookId: {
        type: String,
        required: true,
    },
    InstitutionEmailDomain: {
        type: String,
        required: true,
    }
});

const InstitutionBookXRef = mongoose.model("InstitutionBookXRef", InstitutionBookXRefSchema);

export default InstitutionBookXRef;