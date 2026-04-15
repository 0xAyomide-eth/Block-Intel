import express from 'express'
import cors from 'cors'
import "dotenv/config"
import chatRoute from './routes/chatRoute.js'
import shortenRoute from './routes/shortenRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

// API route
app.use("/chat", chatRoute);
app.use("/shorten", shortenRoute)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

