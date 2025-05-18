// 
import Post from "../models/PostSchema.js"; // ensure .js extension if using ES Modules
import dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    next(
      createError(
        error.status || 500,
        error?.response?.data?.error?.message ||
          error?.message ||
          "Failed to fetch posts"
      )
    );
  }
};

// Create a new post
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    if (!name || !prompt || !photo) {
      return next(createError(400, "Name, prompt, and photo are required"));
    }

    // Upload photo (base64) to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(photo, {
      folder: "ai-images", // optional: organize images in a folder
    });

    const newPost = await Post.create({
      name,
      prompt,
      photo: uploadResponse.secure_url,
    });

    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    next(
      createError(
        error.status || 500,
        error?.response?.data?.error?.message ||
          error?.message ||
          "Failed to create post"
      )
    );
  }
};
