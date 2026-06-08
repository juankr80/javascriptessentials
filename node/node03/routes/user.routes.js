import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import validateUser from '../middlewares/validate.middleware.js';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

router.post('/', validateUser, userController.createUser);
router.put('/:id', validateUser, userController.updateUser);

router.delete('/:id', userController.deleteUser);

export default router;