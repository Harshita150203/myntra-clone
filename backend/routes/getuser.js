const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();
require("dotenv").config();
const hashkey = process.env.HASH_KEY;

router.get("/", async (req, res) => {
  try {
    const userid = req.user.userid;

    const user = await User.findOne({
      _id: userid,
    });

    if (!user) {
      res.status(404).json("No such User Exist");
      return;
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
