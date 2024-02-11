const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

function setUser(id, user) {
  const payload = {
    id,
    ...user,
  };
  return jwt.sign(payload, process.env.AUTH_KEY);
}

function getUser(auth_token) {
  return jwt.verify(`${auth_token}`, process.env.AUTH_KEY);
}

module.exports = { setUser, getUser };
