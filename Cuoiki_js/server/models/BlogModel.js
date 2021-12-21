import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BlogSchema = new Schema(
  {
    title: String,
    content: String,
    authur: String,
  },
  {
    timestamps: true,
  }
);

export const BlogModel = mongoose.model("Blog", BlogSchema);