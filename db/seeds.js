require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const User = require("../models/User");

const mel = new User({
  name: "Million",
  email: "yah@yahoo.com"
});

User.deleteOne({})
  .then(() => mel.save())
  .then(() => console.log("Successful Save"))
  .then(() => mongoose.connection.close());
