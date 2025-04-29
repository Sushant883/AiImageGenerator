import * as dontenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";

dontenv.config();

// setup OpenAI api key

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);


// controller to generate Image

export const generateImage = async(req,res,next) =>{
    try{
        const {prompt} = req.body;

        const response = await openai.createImage({
            prompt,
            n:1,
            size: "1024x1024",
            response_format: "b64json",
        });
        const generateImage = response.data.data[0].b64_json;
    }catch(error){
        next(
            createError(
              error.status,
              error?.response?.data?.error?.message ||
                error?.message ||
                error?.message
            )
        )
    }
}