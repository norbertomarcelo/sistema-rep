import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/users/dtos/IUsersDTO';
import { ICollaboratorsRepository } from '../../modules/collaborator/dtos/ICollaboratorsDTO';
import { CollaboratorsRepository } from '../../modules/collaborator/repositories/CollaboratorsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICollaboratorsRepository>(
  'CollaboratorsRepository',
  CollaboratorsRepository
);
