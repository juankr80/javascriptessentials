import { describe, test, expect, beforeEach } from 'vitest';
import * as userService from '../../services/user.service.js';

describe('User Service', () => {

  beforeEach(() => {
    userService.resetUsers();
  });

  test('should create user', async () => {
    const user = await userService.createUser({
      name: 'Test',
      age: 20
    });

    expect(user.id).toBeDefined();
    expect(user.name).toBe('Test');
  });

  test('should get all users', async () => {
    await userService.createUser({ name: 'A', age: 10 });

    const users = await userService.getAllUsers();

    expect(users.length).toBe(1);
  });

});