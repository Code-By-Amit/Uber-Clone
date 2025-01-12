const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const { createUser } = require('../services/user.service');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
   const err = validationResult(req);
   if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
   }
   const { fullname, email, password } = req.body;
   console.log(req.body)
   const hashedPassword = await userModel.hashPassword(password);
   const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword
   })

   const token = await user.generateAuthToken();

   res.cookie("token", token)

   res.status(201).json({ token, user })
}

module.exports.loginUser = async (req, res, next) => {
   const err = validationResult(req);
   if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
   }

   const { email, password } = req.body;

   const isUserAlreadyExists = await captainModel.findOne({ email })
   if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User Already Exists" })
   }

   const user = await userModel.findOne({ email }).select("+password");

   if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" })
   }

   const isMatch = await user.comparePassword(password);
   if (!isMatch) {
      return res.status(401).json({ message: "Invalid Email or Password" })
   }

   const token = await user.generateAuthToken();
   res.cookie("token", token, {})

   res.status(200).json({ user, token });
}

module.exports.userProfile = async (req, res, next) => {
   const user = req.user;
   res.status(200).json({ user });
}

module.exports.logoutUser = async (req, res, next) => {
   res.clearCookie('token');
   const token = req.cookies.token || req.headers.authorization.split(' ')[1];
   await blackListTokenModel.create({ token })
   res.status(200).json({ message: "User Logged out" })
}