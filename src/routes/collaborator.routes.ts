import { Router } from 'express';
import { CreateCollaboratorController } from '../modules/collaborator/controllers/CreateCollaboratorController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ModifyCollaboratorController } from '../modules/collaborator/controllers/ModifyCollaboratorController';

const collaboratorsRoutes = Router();

const createCollaboratorController = new CreateCollaboratorController();
const modifyCollaboratorController = new ModifyCollaboratorController();

collaboratorsRoutes.use(ensureAuthenticated);
collaboratorsRoutes.post('/create', createCollaboratorController.handle);
collaboratorsRoutes.put('/update/:id', modifyCollaboratorController.handle);

export { collaboratorsRoutes };
