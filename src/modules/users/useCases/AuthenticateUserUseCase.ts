import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../dtos/IUsersDTO';

interface IRequest {
  user_name: string;
  password: string;
}

interface IResponse {
  user: {
    user_name: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}

  async execute({ user_name, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByUserName(user_name);

    if (!user) throw new Error('Username or password incorrect!');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Username or password incorrect!');

    const token = sign({}, 'd12d0badf83205c6243ede8855e80cab', {
      subject: user.user_name,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        user_name: user.user_name,
      },
    };
    return tokenReturn;
  }
}
