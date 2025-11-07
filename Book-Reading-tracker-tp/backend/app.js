const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/bookTracker")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("📚 Book Tracker API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
