const jwt = require("jsonwebtoken");

const createToken = (id, email, expiresIn) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.signedCookies[process.env.COOKIE_NAME];

  if (!token || token.trim() === "") {
    return res.status(401).json({
      message: "Token Not Verified",
      token: token,
      COOKIE_NAME: process.env.COOKIE_NAME,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
    if (err) {
      return res.status(401).json({ message: "Token Expired" });
    } else {
      res.locals.jwtData = success;
      return next();
    }
  });
};


const getUserDetails = (req) => {
  const token = req.signedCookies[process.env.COOKIE_NAME];
  if (!token) {
    throw new Error("No token provided");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { createToken, verifyToken, getUserDetails };
