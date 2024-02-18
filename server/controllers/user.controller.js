const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth.service");
const bcrypt = require("bcryptjs");
const SESSION_ID = uuidv4();

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      name,
      email,
      password: hash,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.email === 1
    ) {
      res.status(400).json({ success: false, error: "Email already exists!" });
    } else {
      res.status(500).json({ success: false, error: "Internal server error!" });
    }
  }
}
async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password!" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password!" });
    }

    const auth_token = setUser(SESSION_ID, user); // Assuming this function generates the auth token
    if (!auth_token) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to generate auth token!" });
    }

    return res.status(200).json({
      success: true,
      message: "Signed in successfully.",
      cookie: { auth_token },
      user: {
        email: user.email,
        name: user.name,
        uid: user._id,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = {
  handleUserSignup,
  handleUserSignin,
};
