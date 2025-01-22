import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, editUser, deleteUser } from './services/api';
import UserTable from './components/UserTable';
import AddUserDialog from './components/AddUserDialog';
import { Button } from '@mui/material';

const App = () => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', department: '' });

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetchUsers();
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    const response = await createUser(newUser);
    setUsers([...users, response.data]);
    setModalOpen(false);
    setNewUser({ firstName: '', lastName: '', email: '', department: '' });
  };

  const handleEditUser = async (id, field, value) => {
    const userToUpdate = users.find((user) => user.id === id);
    const updatedUser = { ...userToUpdate, [field]: value };
    await editUser(id, updatedUser);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdateUser = async (updatedUser) => {
    const { id } = updatedUser;
    await editUser(id, updatedUser);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management App</h1>
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
        Add User
      </Button>
      <UserTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onUpdate={handleUpdateUser}
      />
      <AddUserDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddUser}
        newUser={newUser}
        setNewUser={setNewUser}
      />
    </div>
  );
};

export default App;
