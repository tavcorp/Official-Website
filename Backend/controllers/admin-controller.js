import userModel from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel
      .find()
      .select("username email createdAt");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });

  } catch (error) {
    next(error);
  }
};