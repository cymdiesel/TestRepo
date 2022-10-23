import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    title: String,
    company: String
}, {
    timestamps: true,
    collection: 'contact'
});

export default mongoose.model('Contact', ContactSchema);