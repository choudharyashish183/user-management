const { fetchInitialUsers, getUsers, addUser, updateUser, deleteUser } = require('../services/userService');

// Fetch initial users
fetchInitialUsers();

exports.getAllUsers = (req, res) => {
  const users = getUsers();
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  const user = addUser(newUser);
  res.status(201).json(user);
};

exports.editUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const user = updateUser(id, updatedUser);
  res.status(200).json(user);
};

exports.removeUser = (req, res) => {
  const { id } = req.params;
  deleteUser(id);
  res.status(204).send();
};
