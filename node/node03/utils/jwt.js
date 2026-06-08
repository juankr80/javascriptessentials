import jwt from 'jsonwebtoken';
import config from '../config.js'

export const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    config.jwt_secret,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { id: user.id, email: user.email },
    config.jwt_secret_refresh,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.jwt_secret);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.jwt_secret_refresh);
};