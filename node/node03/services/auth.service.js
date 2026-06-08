import { findUserByEmail, createUser } from '../services/user.service.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { generateTokens, verifyRefreshToken } from '../utils/jwt.js';

export const register = async (user) => {
  const existing = findUserByEmail(user.email);
  if (existing) throw new Error('User already exists');

  const hashed = await hashPassword(user.password);

  const user_secure = { ...user, password: hashed }; 

  const user_store = createUser(user_secure);  

  return user_store;
};

export const login = async ({ email, password }) => {
  const user = findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  return generateTokens(user);
};

export const refresh = async (refreshToken) => {
  const payload = verifyRefreshToken(refreshToken);
  return generateTokens(payload);
};