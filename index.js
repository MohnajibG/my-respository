const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(express.json());
require("dotenv").config();

// Configuration de Cloudinary
mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const userRoutes = require("./routes/user");
app.use(userRoutes);

const offreRoutes = require("./routes/offer");
app.use(offreRoutes);

const cors = require("cors");
app.use(cors());

app.all("*", (req, res) => {
  res.status(404).json({ message: "Note Found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started🔥🔥🔥🔥🔥🔥");
});
