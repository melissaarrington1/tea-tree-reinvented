if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userController = require("./controllers/userController");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", error => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to Mongoose");
});

app.use(express.json());

app.use(express.static(__dirname + "/client/build/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.use("/api/users", userController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
