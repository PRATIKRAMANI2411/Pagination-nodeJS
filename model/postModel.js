import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true,
    },
    postDescription: {
        type: String,
        required: true,
    }
})


export default mongoose.model("Post", postSchema);