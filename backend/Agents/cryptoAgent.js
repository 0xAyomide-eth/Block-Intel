import { createAgent } from "langchain"
import { ChatGoogle } from "@langchain/google"
import { cryptoPrice } from "../tools/GetCryptoPrice.js"
import { cryptoResearch } from "../tools/webSearch.js"
import "dotenv/config"


const model = new ChatGoogle({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-2.5-flash",
    temperature: 0
})

export const CryptoAgent = createAgent({
    model,
    tools: [
        cryptoPrice,
        cryptoResearch
    ]
})