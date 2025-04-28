import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

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
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello GFG Develovers!",
  });
});

//function to connect to mongodb
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};

// function to start the server
const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () =>
      console.log("Server is running on the port numver 8080")
    );
  } catch (error) {
    console.log(error);
  }
}; 

startServer();
