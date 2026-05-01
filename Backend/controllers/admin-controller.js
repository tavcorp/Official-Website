import { User } from "../models/user.model.js";
import  Contact  from "../models/contact.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if(!users || users.length === 0){
      return res.status(404).json({message: "No user found"})
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getAllContactForm = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No contact form found" })
    }
    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};