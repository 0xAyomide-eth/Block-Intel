import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import "dotenv/config"

const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    temperature: 0,
    apiKey: process.env.GEMINI_API_KEY
})

export const shortenTool = async (input) => {
    const res = await model.invoke(
        `Convert this sentence into exactly 4 simple words.
         Only return the words.

         Sentence: ${input}`
    )

    return res.content.trim()
}