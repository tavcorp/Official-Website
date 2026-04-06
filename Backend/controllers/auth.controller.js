import bcryptjs from 'bcrypt';
import crypto from "crypto";

import { User } from '../models/user.model.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail, sendWelcomeEmail, sendResetPasswordEmail } from '../mailtrap/emails.js'

export const signup = async (req, res) => {

  // res.send("Signup route");
  const { email, password, username } = req.body;
  try {
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      return res.status(400).json({ success: false, message: "User already exist" })
    }

    // 🔐 Hash password before saving

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();


    const user = new User({
      email,
      password: hashedPassword,
      username,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    // saveing to the database
    await user.save();

    // jwt

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, user.verificationToken);



    // this is for terminnal 
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    });


  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  // - - - - - -
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true, message: "Email verified successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try{
    // const user = await User.findOne({ email });
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // console.log("Entered password:", password);
    // console.log("Stored password:", user.password);

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = Date.now();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    });
  }catch (error){
    console.error("Login error:", error);
    res.status(400).json({ "Error ": error.message, success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Generate reset token

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    // Send reset email
    await sendResetPasswordEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

    res.status(200).json({ success: true, message: "Password reset link sent to your email" });

  }catch (error) {
    console.error("Forgot password error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
}