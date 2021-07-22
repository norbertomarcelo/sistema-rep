import { Router } from 'express';
import { CreateCollaboratorController } from '../modules/collaborator/controllers/CreateCollaboratorController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ModifyCollaboratorController } from '../modules/collaborator/controllers/ModifyCollaboratorController';
import { DeleteCollaboratorController } from '../modules/collaborator/controllers/DeleteCollaboratorController';
import { ListCollaboratorController } from '../modules/collaborator/controllers/ListCollaboratorController';

const collaboratorsRoutes = Router();

const createCollaboratorController = new CreateCollaboratorController();
const modifyCollaboratorController = new ModifyCollaboratorController();
const deleteCollaboratorController = new DeleteCollaboratorController();
const listCollaboratorController = new ListCollaboratorController();

collaboratorsRoutes.use(ensureAuthenticated);
collaboratorsRoutes.post('/create', createCollaboratorController.handle);
collaboratorsRoutes.put('/update/:id', modifyCollaboratorController.handle);
collaboratorsRoutes.delete('/delete/:id', deleteCollaboratorController.handle);
collaboratorsRoutes.get('/list', listCollaboratorController.handle);

export { collaboratorsRoutes };
