const { getUser } = require( '../services/auth.service');

async function protectedAuth (req,res,next) {
    console.log(req.cookie)
    const auth_token = req.cookie

    if (!auth_token) {
        return res.status(404).json({success:false,error_message:"Session ID not found."})
    }
    const user = getUser(auth_token)
    if (!user) {
        return res.status(404).json({success:false,error_message:"User not found."})
    }     

    req.user = user
    next()
} 

module.exports = {protectedAuth}