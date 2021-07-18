import { getRepository, Repository } from 'typeorm';
import {
  ICreateUserDTO,
  IUsersRepository,
} from '@modules/users/dtos/IUsersDTO';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ user_name, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ user_name, password });

    await this.repository.save(user);
  }

  async findByUserName(user_name: string): Promise<User> {
    const user = await this.repository.findOne({ user_name });

    return user;
  }
}
