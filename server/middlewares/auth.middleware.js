const { getUser } = require("../services/auth.service");

async function protectedAuth(req, res, next) {
  const auth_token = req.body;

  if (!auth_token) {
    return res
      .status(401)
      .json({ success: false, error_message: "USER IS NOT AUTHORISED!" });
  }
  const user = getUser(auth_token);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, error_message: "INCORRECT EMAIL OR PASSWORD!" });
  }

  req.user = user;
  next();
}

module.exports = { protectedAuth };
