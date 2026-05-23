// controllers/subscribeUpdate.controller.js

import SubscribeUpdate from "../models/subscribe.model.js";

const subscribeUpdate = async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Create new subscriber
    const newSubscribeUpdate = await SubscribeUpdate.create({
      email,
    });

    return res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: newSubscribeUpdate,
    });

  } catch (error) {
    console.error("Subscribe update error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Subscription failed",
    });
  }
};

export default subscribeUpdate;