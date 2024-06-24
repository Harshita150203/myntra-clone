const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();
require("dotenv").config();
const hashkey = process.env.HASH_KEY;

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      res.status(404).json("No such User Exist");
      return;
    }

    const isvalid = await bcrypt.compare(password, user.password);

    if (!isvalid) {
      res.status(401).json("Invalid Password");
      return;
    }

    const token = jwt.sign({ userid: user._id }, hashkey);

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Successfully Logged In",
        token: token,
        name: user.name,
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
