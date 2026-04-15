import express from "express"
import { shortenTool } from "../tools/shortentool.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { text } = req.body
        const shortened = await shortenTool(text);

        res.json({ shortened });
    } catch (err) {
        res.status(500).json({ error: "Failed to shorten text" });

    }
})

export default router