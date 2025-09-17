import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const blogPostSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    date: Date,
    excerpt: String,
    content: String,
    author: String,
    category: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    likesBy: { type: [String], default: [] },
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("BlogPost", blogPostSchema);
