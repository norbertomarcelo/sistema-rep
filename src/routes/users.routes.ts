import { Router } from 'express';
import { CreateUserController } from '../modules/users/controllers/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/create', createUserController.handle);

export { userRoutes };