import { verifyAccessToken } from '../utils/jwt.js';

export const authenticate = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const token = header.split(' ')[1];
    const payload = verifyAccessToken(token);

    req.user = payload;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};