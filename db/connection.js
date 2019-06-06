require("dotenv").config();
const mongoose = require("mongoose");

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/tea-tree");
}
