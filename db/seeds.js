require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const User = require("../models/User");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

const db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on("error", function(err) {
  console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once("open", function() {
  console.log("Connected to MongoDB!");
});

const mel = new User({
  name: "Melissa",
  email: "yah@yahoo.com"
});

User.deleteOne({})
  .then(() => mel.save())
  .then(() => console.log("Successful Save"))
  .then(() => mongoose.connection.close());
