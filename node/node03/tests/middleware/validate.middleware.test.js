import { describe, it, expect, vi } from 'vitest';
import validateUser from '../../middlewares/validate.middleware.js';

describe('validateUser middleware', () => {

  it('should call next() if data is valid', () => {
    const req = {
      body: { name: 'Juan', age: 25 }
    };

    const res = {};
    const next = vi.fn();

    validateUser(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should return 400 if name is missing', () => {
    const req = {
      body: { age: 25 }
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    const next = vi.fn();

    validateUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 400 if age is invalid', () => {
    const req = {
      body: { name: 'Juan', age: 'abc' }
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    const next = vi.fn();

    validateUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

});
