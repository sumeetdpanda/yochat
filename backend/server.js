import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

// App Declarations
const app = express();
dotenv.config();

// Variable Declarations
const PORT = process.env.PORT || 5555;

// Middlewares
app.use("/api/auth", authRoutes);

// Deafult Route
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
