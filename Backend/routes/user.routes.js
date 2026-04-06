import express from 'express';
const router = express.Router();

// import userController from '../controllers/user.controller.js';
import { registerUser, loginUser } from '../controllers/user.controller.js';
// import {usergetProfileLogoutController} from '../controllers/getProfileLogout.controller.js';
import { logoutUser, getUserProfile } from '../controllers/getProfileLogout.controller.js';
// Authentication middleware
import { authUser } from '../middlewares/auth.middleware.js';

// Validation middleware
import {
  validateRequest,
  registerValidationRules,
  loginValidationRules,
} from '../middlewares/validationMiddleware.js';

// console.log('Logout User Function:', logoutUser);
// console.log('Get User Profile Function:', getUserProfile);

// Registering a new user
router.post(
  '/register',
  registerValidationRules,
  validateRequest,
  registerUser
);

// Login a user
router.post(
  '/login',
  loginValidationRules,
  validateRequest,
  loginUser
);

// Logout a user
router.get(
  '/logout',
  authUser,
  logoutUser
);

// Get user profile
router.get(
  '/profile',
  authUser,
  getUserProfile
);

export default router;