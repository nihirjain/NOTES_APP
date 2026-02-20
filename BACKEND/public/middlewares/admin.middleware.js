const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const adminAuth = async (req , res , next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message : 'No token, authorization denied'});
        }
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if(!user){
            return res.status(401).json({message : 'User not found, authorization denied'});
        }
        if(user.role !== 'admin'){
            return res.status(403).json({message : 'Access denied, admin only'});
        }
        req.user = user;
        req.decode = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({message : 'Token is not valid'});
    }
};

module.exports = {adminAuth};