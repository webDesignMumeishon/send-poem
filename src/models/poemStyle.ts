import mongoose from "mongoose";

const PoemStyleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes leading and trailing whitespace
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    seoDescription: {
        type: String,
        required: true,
        trim: true,
    },
    syllablePattern: {
        type: [Number], // Array of numbers, e.g., [5, 7, 5] for a Haiku
        required: true,
        validate: {
            validator: function (arr: number[]) {
                return arr.every(Number.isInteger) && arr.length > 0;
            },
            message: "Syllable pattern must be an array of integers.",
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Prevent model overwrite during development
const PoemStyle = mongoose.models.PoemStyle || mongoose.model("PoemStyle", PoemStyleSchema);

export default PoemStyle;
