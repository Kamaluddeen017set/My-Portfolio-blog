import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME) {
    return res.status(400).json({ message: "Invalid username" });
  }

  const isMatch = await bcrypt.compare(password, "process.env.ADMIN_PASSWORD");
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // ✅ Create JWT token
  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;
