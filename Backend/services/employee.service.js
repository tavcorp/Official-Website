const employeeModel = require('../models/employee')

module.exports.createEmployee = async ({
  firstname, lastname, email, password
}) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }
  const employee = employeeModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password
  })

  return employee;
}