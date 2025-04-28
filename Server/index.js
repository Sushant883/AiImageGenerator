import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dontenv";

dotenv.config;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went wrong!";
  return res.status(status).json({ success: false, status, message });
});


//Default get
app.get("/", async (req,res) =>{
    res.status(200).json({
        message: "Hello GFG Develovers!",
    })
})
