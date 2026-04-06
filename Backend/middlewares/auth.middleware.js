import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import blackListTokenModel from "../models/blacklistToken.model.js";

// Middleware to check if user is authenticated and token is valid
export const authUser = async (req, res, next) => {
  console.log("Auth Middleware Called");

  try {
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. Token not provided.",
      });
    }

    // Check if token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({
        message: "Unauthorized. Token is blacklisted.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user
    const user = await userModel
      .findById(decoded._id)
      .select("username email");

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized. User not found.",
      });
    }

    // Attach data to request
    req.user = user;
    req.token = token;
    req.userID = user._id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized. Invalid or expired token.",
    });
  }
};