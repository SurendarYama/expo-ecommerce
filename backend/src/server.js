import express from "express";
import path from "path";
import { ENV } from "./config/env.js";

const { PORT, NODE_ENV } = ENV;

const app = express();
const __dirname = path.resolve();

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

// make ready for deployment...
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}
app.listen(PORT, () => console.log(`Server up and running on ${PORT}...`));
