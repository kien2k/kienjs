import express from 'express'
import { BlogModel } from '../models/BlogModel.js';

const BlogRouter = express.Router();

BlogRouter.post("/editblog", async (req, res) => {
  const blog = new BlogModel(req.body)
  await blog.save()
  res.status(200).send(blog);
});
BlogRouter.post("/delete", async (req, res) => {
  const blog = await BlogModel.findOne({id: req.body.id})
  await blog.remove()
  res.status(200).send('xoa thanh cong');
});
BlogRouter.get("/getall", async (req, res) => {
  const blogs = await BlogModel.find()
  res.status(200).send(blogs);
});

export default BlogRouter