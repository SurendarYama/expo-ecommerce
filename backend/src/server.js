import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(PORT, () => console.log(`Server up and running on ${PORT}...`));
