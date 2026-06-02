import mongoose from "mongoose";

const startProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },

    services: {
      type: [String],
      required: [true, "At least one service is required"],
      validate: {
        validator: (v) => v.length > 0,
        message: "At least one service is required",
      },
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },

    timeline: {
      type: String,
      required: [true, "Timeline is required"],
      enum: [
        "ASAP",
        "1–3 months",
        "3–6 months",
        "Flexible / Not sure",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("StartProject", startProjectSchema);