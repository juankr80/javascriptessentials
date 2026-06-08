import http from 'http';
import {handleRequest} from './routes.js'

import * as userController from './users.js';

const server = http.createServer(handleRequest);


server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
