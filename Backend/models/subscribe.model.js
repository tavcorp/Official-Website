import { Schema, model } from "mongoose";

const subscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
  },
  {
    timestamps: true,
  }
);

const Subscribe = model("Subscribe", subscribeSchema);

export default Subscribe;