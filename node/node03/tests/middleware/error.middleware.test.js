import { describe, it, expect, vi } from 'vitest';
import errorMiddleware from '../../middlewares/error.middleware.js';

describe('errorMiddleware', () => {

  it('should return 500 and error message', () => {
    const err = new Error('Test error');

    const req = {};

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    const next = vi.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: 'Error interno del servidor' // o el mensaje definido
    });
  });

});
