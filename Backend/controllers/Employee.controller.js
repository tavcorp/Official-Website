const employeeModel = require('../models/employee');
const employeeService = require('../services/employee.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken');



module.exports.registeremployee = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isemployeeAlreadyExist = await employeeModel.findOne({ email });

  if (isemployeeAlreadyExist) {
    return res.status(400).json({ message: 'employee already exist' });
  }


  const hashedPassword = await employeeModel.hashPassword(password);

  const employee = await employeeService.createemployee({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType
  });

  const token = employee.generateAuthToken();

  res.status(201).json({ token, employee });

}

module.exports.loginemployee = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const employee = await employeeModel.findOne({ email }).select('+password');

  if (!employee) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await employee.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = employee.generateAuthToken();

  res.cookie('token', token);

  res.status(200).json({ token, employee });
}

module.exports.getemployeeProfile = async (req, res, next) => {
  res.status(200).json({ employee: req.employee });
}

module.exports.logoutemployee = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await blackListTokenModel.create({ token });

  res.clearCookie('token');

  res.status(200).json({ message: 'Logout successfully' });
}