import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { ICreateUserDTO, IUsersRepository } from '../dtos/IUsersDTO';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_name, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByUserName(
      user_name
    );

    if (userAlreadyExists) throw new Error('User already exists!');

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      user_name,
      password: passwordHash,
    });
  }
}
