const express = require('express');
const {registerUser , LoginUser} = require('../controllers/auth.controllers');
const { userAndAdminAuth } = require('../middlewares/auth.middleware');
const {getmeController} = require('../controllers/auth.controllers');

const authRouter = express.Router();

authRouter.post('/register' , registerUser)
authRouter.post('/login' , LoginUser)
authRouter.post('/logout' , (req , res) => {
    res.clearCookie('token');
    res.status(200).json({message : 'User logged out successfully'});
});
authRouter.get('/getme' , userAndAdminAuth ,  getmeController);
module.exports = authRouter;