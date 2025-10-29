const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const employeeSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'Firstname must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      minlength: [3, 'Lastname must be at least 3 characters long'],
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },

  
})


employeeSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
}


employeeSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}


employeeSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const employeeModel = mongoose.model('employee', employeeSchema)


module.exports = employeeModel;