// 
import express from "express";
import { generateImage } from "../controllers/GenerateAIImage.js";

const router = express.Router();

// router.post("/", generateImage);  // POST request use karo, kyunki prompt body me bhejna hai
router.post("/generate-image", generateImage);  // POST request use karo, kyunki prompt body me bhejna hai

export default router;
