let users = [];

exports.fetchInitialUsers = async () => {
  const axios = require('axios');
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  users = response.data.map((user) => ({
    id: user.id,
    firstName: user.name.split(' ')[0],
    lastName: user.name.split(' ')[1] || '',
    email: user.email,
    department: user.company?.name || 'N/A',
  }));
};

exports.getUsers = () => users;

exports.addUser = (newUser) => {
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const user = { id, ...newUser };
  users.push(user);
  return user;
};

exports.updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) throw new Error('User not found');
  users[index] = { ...users[index], ...updatedUser };
  return users[index];
};

exports.deleteUser = (id) => {
  users = users.filter((user) => user.id !== parseInt(id));
};
