import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';

export const fetchUsers = async () => axios.get(`${API_BASE_URL}/users`);
export const createUser = async (user) => axios.post(`${API_BASE_URL}/users`, user);
export const editUser = async (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${API_BASE_URL}/users/${id}`);
