import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/dtos/IUsersDTO';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
