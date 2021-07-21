import { Router } from 'express';
import { collaboratorsRoutes } from './collaborator.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/collaborators', collaboratorsRoutes);

export { router };
