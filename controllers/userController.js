const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
  console.log("all user found");
});

module.exports = router;
