const express = require("express");
const mongoose = require("mongoose");
const { generateMeta } = require("./controllers/openaiController");

const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://bhargavtenali:xAYoWxFUXGQCLy9b@backenddb.y8mjn0x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

// routes
app.post("/openai/search", generateMeta);
