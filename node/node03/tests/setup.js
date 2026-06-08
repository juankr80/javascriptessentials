import { beforeEach } from 'vitest';
import { resetUsers } from '../services/user.service.js';

beforeEach(() => {
  resetUsers();
});
