import userModel from '../models/user.model.js';

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }

  const user = await userModel.create({
    username,
    email,
    password, // hashing handled in schema
  });

  return user;
};