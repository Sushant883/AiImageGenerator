import * as dontenv from "dotenv";
import { createError } from "../error.js";
import { Configuration } from "openai";

dontenv.config();

// setup OpenAI api key

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
