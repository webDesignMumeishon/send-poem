import mongoose, { Model } from "mongoose";

export interface IPoem {
    _id: string;
    email: string;
    text: string; // Optional because there's no `required: true`
    name: string;
}

const PoemSchema = new mongoose.Schema<IPoem>({
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
        required: true,
        maxlength: [900, "Text cannot exceed 800 characters."],
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

// Specify the model type
const Poem: Model<IPoem> = mongoose.models.Poem || mongoose.model<IPoem>("Poem", PoemSchema);

export default Poem;
