import Post from "../models/Posts";
import * as dotenv from "dotenv";
import { createError } from "../error";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: "",
    api_key: "",
    api_secret: "",
});

// Get all posts

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message ||
          error?.message ||
          error?.message
      )
    );
  }
};

// Create Post

export const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = "";
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl,
    });
    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    next( 
      createError(
        error.status,
        error?.response?.data?.error?.message ||
          error?.message ||
          error?.message
      )
    );
  }
};
