import mongoose from 'mongoose';

const PoemSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please use a valid email address.",
        ],
    },
    text: {
        type: String,
        maxlength: [900, "Text cannot exceed 800 characters."],
    },
    name: {
        type: String,
        required: true,
        trim: true, // Removes leading/trailing spaces
    },
});

export default mongoose.models.Poem || mongoose.model("Poem", PoemSchema);
