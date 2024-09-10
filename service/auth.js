const jwt = require("jsonwebtoken");




// This function  takes jwt token and gives user objext in return using the secret key 

function getUser(token) {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Failed to verify token");
    return null;
  }
}

module.exports = {
  getUser,
};
