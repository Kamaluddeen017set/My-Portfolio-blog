import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

///Increase payload size
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Single CORS setup (fixes blocked requests)
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // React dev server
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

app.use("/", blogRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
