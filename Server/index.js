import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dontenv";

dotenv.config;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
