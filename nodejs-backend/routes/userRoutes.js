const express = require('express');
const { getAllUsers, createUser, editUser, removeUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

module.exports = router;
