require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const User = require("../models/User");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

const mel = new User({
  name: "Melissa",
  email: "yah@yahoo.com"
});

User.deleteOne({})
  .then(() => mel.save())
  .then(() => console.log("Successful Save"))
  .then(() => mongoose.connection.close());
