const userModel = require('../models/user');
const employeeModel = require('../models/employee');
const blackListTokenModel = require('../models/blacklistToken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }


  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id)

    req.user = user;

    return next();

  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports.authEmployee = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];


  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });



  if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const employee = await employeeModel.findById(decoded._id)
    req.employee = employee;

    return next()
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: 'Unauthorized' });
  }
}