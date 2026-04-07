import express from "express";
import { CryptoAgent } from "../Agents/cryptoAgent.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await CryptoAgent.invoke({
      messages
    });

    const lastMessage = response.messages.at(-1);

    res.json({
      reply: lastMessage.content
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

export default router;