
import * as userController from './users.js';
import os from 'os';        

export function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  switch (true) {
    case pathname === '/' && method === 'GET':        

        res.end(JSON.stringify({ 
            message: 'API v1',
            platform: os.platform(),
            "Total Memory": os.totalmem(),
            "Free Memory": os.freemem() })
        );
        break;

    // GET all users
    case pathname === '/users' && method === 'GET':
      const allUsers = userController.getAllUsers();
      res.end(JSON.stringify(allUsers));
      break;

    // GET user by ID
    case pathname.match(/^\/users\/\d+$/) && method === 'GET':
      const id = pathname.split('/')[2];
      const user = userController.getUserById(id);
      if (user) {
        res.end(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'User not found' }));
      }
      break;

    // POST create user
    case pathname === '/users' && method === 'POST':
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          const userData = JSON.parse(body);
          const newUser = userController.createUser(userData);
          res.statusCode = 201;
          res.end(JSON.stringify(newUser));
        } catch (err) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      break;

    // PUT update user
    case pathname.match(/^\/users\/\d+$/) && method === 'PUT':
      const updateId = pathname.split('/')[2];
      let updateBody = '';
      req.on('data', chunk => {
        updateBody += chunk.toString();
      });
      req.on('end', () => {
        try {
          const userData = JSON.parse(updateBody);
          const updatedUser = userController.updateUser(updateId, userData);
          if (updatedUser) {
            res.end(JSON.stringify(updatedUser));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'User not found' }));
          }
        } catch (err) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      break;

    // DELETE user
    case pathname.match(/^\/users\/\d+$/) && method === 'DELETE':
      const deleteId = pathname.split('/')[2];
      const deletedUser = userController.deleteUser(deleteId);
      if (deletedUser) {
        res.end(JSON.stringify(deletedUser));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'User not found' }));
      }
      break;

    default:
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not found' }));
  }
}
