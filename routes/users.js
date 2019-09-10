const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/test", (req, res) => res.json({ msg: "Users is working" }));

// @route GET api/users/test
// @desc Tests users route
// @access Public

router.get("/list", (req, res) => {
  User.find().then(users => res.json(users));
});

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save().then(user => res.json(user));
  // .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/items/:id
// @desc Delete An Item
// @access Public

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
