import express from "express";
import { verifyToken } from "../middleware/auth.js";

import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchedResult,
  likeBlog,
  addComment,
  getLatestBlogs,
  shareBlog,
  getRandomBlogs,
} from "../controllers/blogController.js";

const router = express.Router();
router.get("/latest", getLatestBlogs);
router.get("/random", getRandomBlogs);
router.get("/", getBlogs);
router.get("/:id", getBlogById);

// protect blog creation with verifyToken 
router.post("/", verifyToken, createBlog);
router.put("/:id", verifyToken, updateBlog);
router.delete("/:id", verifyToken, deleteBlog);
// Search blogs
router.get("/search", searchedResult);
//like and unlike
router.put("/:id/like", likeBlog);

//add and get comment
router.post("/:id/comment", addComment);
//share page
router.get("/share/:id", shareBlog);

export default router;
