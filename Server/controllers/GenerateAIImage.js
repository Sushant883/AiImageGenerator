
// import dotenv from "dotenv";
// import { createError } from "../error.js";
// // import { Configuration, OpenAIApi } from "openai";
// import OpenAI from "openai";
// dotenv.config();
// // console.log("API KEY present:", !!process.env.OPENAI_API_KEY); // 🔍 Debug
// // const openai = new OpenAIApi(configuration);
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const generateImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;
//     console.log("Prompt received in backend:", prompt);

//     const response = await openai.images.generate({
//       model: "dall-e-2",
//       // prompt:prompt.trim(), // Trim whitespace from the prompt
//       prompt:prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const generatedImage = response.data[0].b64_json;
//     return res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     console.error("Error in generateImage:", error);

//     // Extra debugging: If error.response.data exists, log it too
//     if (error.response?.data) {
//       console.error("OpenAI API Error response data:", error.response.data);
//     }
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
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return next(createError(400, "Prompt cannot be empty"));
    }

    console.log("Prompt received in backend:", prompt);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt.trim(),
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const generatedImage = response.data[0].b64_json;

    return res.status(200).json({ photo: generatedImage });
  } catch (error) {
    console.error("Error in generateImage:", error);

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
