const { response } = require("express");
const jwt = require("jsonwebtoken");

const authChecker = (req, res, next) => {
  try {
    const token = req?.cookies?.auth_token;
    // console.log(req.cookies);
    const decoded = jwt.verify(token, process.env.SECRET);
    res.json(200).json({ response: "ok" });
  } catch (error) {
    console.error(error.message);
    res.status(403).json({ response: "failed" });
  }
};

module.exports = authChecker;
