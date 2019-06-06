require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/tea-tree");
}

mongoose.connection.on("error", err => {
  console.error("MongoDB connection error: ", err);
  process.exit(-1);
});

mongoose.connection.once("open", () => {
  console.log("Mongoose has connected to MongoDB");
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Worldddd!");
});

app.use(express.static(__dirname + "/client/build/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
