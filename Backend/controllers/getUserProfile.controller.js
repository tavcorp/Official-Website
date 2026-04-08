// import userModel from "../models/user.model.js";

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