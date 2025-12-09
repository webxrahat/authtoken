import User from "../models/user.model.js";

export const getAllUsers = (req, res) => {
  res.send("User List");
};

export const createUser = (req, res) => {
  const { username, password } = req.body;
  console.log("username", username);

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  res.send("Create User");
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
