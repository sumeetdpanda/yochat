import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Declarations
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // to parse incoming requests with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port: ${PORT}`);
});
