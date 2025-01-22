import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const UserTable = ({ users, onEdit, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditedUser({ ...user });
  };

  const handleUpdateClick = () => {
    onUpdate(editedUser); // This will trigger the update for the user
    setEditingId(null); // Exit edit mode
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead style={{ backgroundColor: '#f4f6f8' }}> {/* Add a background shade */}
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    value={editedUser.firstName}
                    onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
                  />
                ) : (
                  user.firstName
                )}
              </TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    value={editedUser.lastName}
                    onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
                  />
                ) : (
                  user.lastName
                )}
              </TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                  />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    value={editedUser.department}
                    onChange={(e) => setEditedUser({ ...editedUser, department: e.target.value })}
                  />
                ) : (
                  user.department
                )}
              </TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdateClick}
                      style={{ marginRight: '10px' }}  // Add gap between buttons
                    >
                      Update
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditClick(user)}
                      style={{ marginRight: '10px' }}  // Add gap between buttons
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"  // Red color for delete button
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
