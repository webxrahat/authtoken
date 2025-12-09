import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Get User with ID: ${id}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.send(`Update User with ID: ${id}`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.send(`Delete User with ID: ${id}`);
};
