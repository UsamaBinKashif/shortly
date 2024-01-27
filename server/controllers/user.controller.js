const User = require("../models/user.model");
const { v4: uuidv4 } = require('uuid');
const { setUser } = require( '../services/auth.service');

const SESSION_ID = uuidv4()

async function handleUserSignup(req,res){
const {name,email,password} = req.body
await User.create({
    name,email,password
})
return res.status(200).json({success:"SIGNED UP SUCCESSFULLY."})
}
  

async function handleUserSignin(req,res){
const {email,password} = req.body
const user = await User.findOne({
    email,password
})

if (!user) {
  return res.status(404).json({success:false})
}else{
  setUser(SESSION_ID,user)
  res.cookie("auth_token",SESSION_ID)
  return res.status(200).json({success:true,
  auth_token:SESSION_ID,
  user:user
}) 
}
}
module.exports = {
  handleUserSignup,
  handleUserSignin
  };
  
