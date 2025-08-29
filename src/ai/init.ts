import { configureGenkit } from "@genkit-ai/core";
import { googleAI } from "@genkit-ai/googleai";
import * as dotenv from "dotenv";

dotenv.config();

export const genkitInstance = configureGenkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_AI_API_KEY!,
    }),
  ],
  logLevel: "debug",
  enableTracingAndMetrics: true,
});