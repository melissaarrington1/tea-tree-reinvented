const express = require("express");
const router = express.Router();
// const gravatar = require("gravatar");
// const bcrypt = require("bcrypt");

const User = require("../models/User");

// @route GET api/users/test
// @desc Tests users route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Users works" }));

router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

// @route GET api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
