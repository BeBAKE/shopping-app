const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req?.cookies?.auth_token;
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(403).json({ message: error.message });
  }
};

module.exports = authMiddleware;
