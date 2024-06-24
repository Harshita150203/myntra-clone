const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cookieOptions = {
      httpOnly: true,
    };

    return res.cookie("token", "", cookieOptions).status(200).json({
      message: "session out",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
});

module.exports = router;
