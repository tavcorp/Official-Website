import userModel from '../models/user.model.js';

// import userService from '../services/user.service.js';
import { createUser } from '../services/user.service.js';

import { validationResult } from 'express-validator';

// Helper function
const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      errors: errors.array(),
    });
    return true;
  }
  return false;
};


// ✅ Register User
export const registerUser = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    //  hashing handled in schema (pre-save)
    const user = await createUser({
      username,
      email,
      password,
    });

    const token = user.generateAuthToken();

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(`Error registering user: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};


// ✅ Login User
export const loginUser = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { email, password } = req.body;

  try {
    const user = await userModel
      .findOne({ email })
      .select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false, // true in production
    });

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(`Error logging in user: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};