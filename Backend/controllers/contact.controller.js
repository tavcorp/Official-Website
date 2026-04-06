import Contact from "../models/contact.model.js";

const contactForm = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;

    // Basic validation (extra safety beyond express-validator)
    if (!username || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = await Contact.create({
      username,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });

  } catch (error) {
    console.error("Contact form error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Message not delivered",
    });
  }
};

export default contactForm;