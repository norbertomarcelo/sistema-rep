import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCollaboratorUseCase } from '../useCases/CreateCollaboratorUseCase';

export class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, pis } = request.body;

    const createCollaboratorUseCase = container.resolve(
      CreateCollaboratorUseCase
    );

    const collaborator = await createCollaboratorUseCase.execute({ name, pis });

    return response.status(201).json(collaborator);
  }
}
