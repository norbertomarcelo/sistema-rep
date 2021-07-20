import { Router } from 'express';
import { AuthenticateUserController } from '../modules/users/controllers/AuthenticateUserController';
import { CreateUserController } from '../modules/users/controllers/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/session', authenticateUserController.handle);

export { userRoutes };
