const User = require("../models/user.model");

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
  return res.status(404).json({failed:"USER NOT FOUND, WRONG CREDENTIALS!"})
}else{
  return res.status(200).json({success:"SIGNED IN.",
  user:user
}) 
}
}
module.exports = {
  handleUserSignup,
  handleUserSignin
  };
  
