import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      minlength: [3, "Subject must be at least 3 characters long"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters long"],
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Contact = model("Contact", contactSchema);

export default Contact;