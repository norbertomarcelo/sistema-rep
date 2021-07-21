import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/users/repositories/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error('Token missing!');

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_name } = verify(
      token,
      'd12d0badf83205c6243ede8855e80cab'
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByUserName(user_name);

    if (!user) throw new Error('Username does not exists!');

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
