// // 
// // import dotenv from "dotenv";
// // import { createError } from "../error.js";
// // import { Configuration, OpenAIApi } from "openai";



// dotenv.config(); // spelling fix: dotenv instead of dontenv

// // Setup OpenAI API key
// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// const openai = new OpenAIApi(configuration);

// // Controller to generate image
// export const generateImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return next(createError(400, "Prompt is required"));
//     }

//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json", // fix: underscore between b64 and json
//     });

//     const generatedImage = response.data.data[0].b64_json;

//     return res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     console.error("Error in generateImage:", error);
//     next(
//       createError(
//         error.status || 500,
//         error?.response?.data?.error?.message ||
//           error?.message ||
//           "Something went wrong while generating the image"
//       )
//     );
//   }
// };

import dotenv from "dotenv";
import { createError } from "../error.js";
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";
dotenv.config();
// console.log("API key from env:", process.env.OPENAI_API_KEY);

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// const openai = new OpenAIApi(configuration);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt received in backend:", prompt);
    

    const response = await openai.images.generate({
      model:"dall-e-3",
      prompt:prompt.trim(),
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const generatedImage = response.data[0].b64_json;
    return res.status(200).json({ photo: generatedImage });
  } 
  catch (error) {
    console.error("Error in generateImage:", error);

     // Extra debugging: If error.response.data exists, log it too
     if (error.response?.data) {
      console.error("OpenAI API Error response data:", error.response.data);
    }
    next(
      createError(
        error.status || 500,
        error?.response?.data?.error?.message ||
          error?.message ||
          "Something went wrong while generating the image"
      )
    );
  }
};
