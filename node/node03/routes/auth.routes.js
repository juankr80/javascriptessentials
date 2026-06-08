import { Router } from 'express';
import {
  register,
  login,
  refresh,
  profile,
} from '../controllers/auth.controller.js';

import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);

// Protected route
router.get('/me', authenticate, profile);

export default router;