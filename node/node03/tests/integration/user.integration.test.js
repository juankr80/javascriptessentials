import request from 'supertest';
import app from '../../app.js';

describe('User API (Integration)', () => {

  test('GET /users -> empty array', async () => {
    const res = await request(app).get('/api/users');

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  test('POST /users -> create user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Juan', age: 25 });

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Juan');
  });

  test('POST /users -> validation error', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: '', age: 20 });

    expect(res.status).toBe(400);
  });

  test('GET /users/:id -> found', async () => {
    const user = await request(app)
      .post('/api/users')
      .send({ name: 'Maria', age: 30 });

    const id = user.body.data.id;

    const res = await request(app).get(`/api/users/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(id);
  });

  test('PUT /users/:id -> update user', async () => {
    const user = await request(app)
      .post('/api/users')
      .send({ name: 'Pedro', age: 20 });

    const id = user.body.data.id;

    const res = await request(app)
      .put(`/api/users/${id}`)
      .send({ name: 'Updated', age: 22 });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Updated');
  });

  test('DELETE /users/:id -> delete user', async () => {
    const user = await request(app)
      .post('/api/users')
      .send({ name: 'Delete', age: 50 });

    const id = user.body.data.id;

    const res = await request(app)
      .delete(`/api/users/${id}`);

    expect(res.status).toBe(200);
  });

});