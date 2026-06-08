import * as userService from '../services/user.service.js';
import asyncHandler from '../utils/asyncHandler.js';

// GET /users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  res.json({ success: true, data: users });
});

// GET /users/:id
export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json({ success: true, data: user });
});

// POST /users
export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  res.status(201).json({ success: true, data: user });
});

// PUT /users/:id
export const updateUser = asyncHandler(async (req, res) => {
  const updated = await userService.updateUser(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json({ success: true, data: updated });
});

// DELETE /users/:id
export const deleteUser = asyncHandler(async (req, res) => {
  const deleted = await userService.deleteUser(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json({ success: true, message: 'Usuario eliminado' });
});