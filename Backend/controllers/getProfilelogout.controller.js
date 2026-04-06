import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

//  Logout User
export const logoutUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    const token =
      req.cookies?.token ||
      (authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null);

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token provided",
      });
    }

    // Save token to blacklist
    await blacklistTokenModel.create({ token });

    // Clear cookie
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

  } catch (error) {
    console.error(`Error logging out user: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


//  Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user._id)
      .select("username email");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error(`Error fetching user profile: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};