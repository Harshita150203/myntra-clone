const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hpassword = await bcrypt.hash(password, 12);

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      res.status(411).json({ message: "User Already Exist " });
      return;
    }

    const newuser = await User.create({
      name: name,
      email: email,
      password: hpassword,
    });

    res.status(200).json({ messsage: "New User Created Successfully" });
  } catch (err) {
    console.log(err);

    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
