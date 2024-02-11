const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth.service");
const bycrypt = require("bcryptjs");
const SESSION_ID = uuidv4();

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const hashedpassword = bycrypt.hashSync(password, 12);
  await User.create({
    name,
    email,
    password: hashedpassword,
  });
  res.status(200).json({ success: "SIGNED UP SUCCESSFULLY." });
  return res.redirect("/signin");
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "INCORRECT EMAIL OR PASSWORD!" });
    }

    const matchedPassword = await bycrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res
        .status(404)
        .json({ success: false, message: "INCORRECT EMAIL OR PASSWORD!" });
    }

    const auth_token = setUser(SESSION_ID, user);
    res.cookie("auth_token", auth_token);
    return res
      .status(200)
      .json({ success: true, message: "User signed in successfully" });
  } catch (error) {
    console.error("Error in handleUserSignin:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
module.exports = {
  handleUserSignup,
  handleUserSignin,
};
