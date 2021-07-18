import { User } from '@modules/users/entities/User';

interface ICreateUserDTO {
  user_name: string;
  password: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByUserName(user_name: string): Promise<User>;
}

export { ICreateUserDTO, IUsersRepository };
