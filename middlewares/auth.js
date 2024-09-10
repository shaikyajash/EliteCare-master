const { getUser } = require("../service/auth");


// By this middleware we set  user id , email in req.user

async function checkAuth(req, res, next) {
    const token = req.signedCookies[process.env.COOKIE_NAME];

  const user = getUser(token);
 
  req.user = user;
  next();
}

module.exports = {
  checkAuth,
};
