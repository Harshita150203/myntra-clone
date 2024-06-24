const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function auth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Authentication failed" });
    return;
  }

  jwt.verify(token, process.env.HASH_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Authentication failed" });
      return;
    }

    req.user = decoded;
    next();
  });
};
