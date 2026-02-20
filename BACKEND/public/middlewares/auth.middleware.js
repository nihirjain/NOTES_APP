const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userAndAdminAuth = async (req , res , next) => {
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
        req.user = user;
        req.decoded = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({message : 'Token is not valid'});
    }
};

module.exports = {userAndAdminAuth};