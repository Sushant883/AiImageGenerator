// 
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";
// import PostSchema from "./models/PostSchema.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/routes/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello GFG Developers!",
  });
});

// Error handling middleware (after routes)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({ success: false, status, message });
});

// Connect to MongoDB with async/await
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Failed to connect to DB");
    console.error(err);
    process.exit(1); // Exit process if DB connection fails
  }
};

const PORT = process.env.PORT || 8080;

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
  });
};

startServer();
