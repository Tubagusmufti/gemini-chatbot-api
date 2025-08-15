import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Setup Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Endpoint chat
app.post("/api/chat", async (req, res) => {
  try {
    const messages = req.body.messages;
    const userMessage = messages[0]?.content || "";

    const result = await model.generateContent(userMessage);
    const aiReply = result.response.text();

    res.json({ result: aiReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ result: "Terjadi kesalahan di server." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
