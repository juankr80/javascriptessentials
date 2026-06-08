import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    const { password, ...userClean } = user;
    res.status(201).json(userClean);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const tokens = await authService.login(req.body);
    res.json(tokens);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await authService.refresh(refreshToken);
    res.json(tokens);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

export const profile = async (req, res) => {    
    res.json(req.user);
};