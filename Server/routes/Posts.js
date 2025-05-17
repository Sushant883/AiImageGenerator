// import express from "express";
// import { createPost, getAllPosts } from "../controllers/Posts.js";

// const router = express.Router();

// router.get("/", getAllPosts);
// router.post("/", createPost);

// export default router;
import express from "express";
import postsRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

app.use("/posts", postsRoutes);  // mount karo yahan posts routes

// baki server setup etc.
