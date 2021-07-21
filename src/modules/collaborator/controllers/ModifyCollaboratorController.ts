import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ModifyCollaboratorUseCase } from '../useCases/ModifyCollaboratorUseCase';

export class ModifyCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, pis } = request.body;
    const { id } = request.params;

    const modifyCollaboratorUseCase = container.resolve(
      ModifyCollaboratorUseCase
    );

    const collaborator = await modifyCollaboratorUseCase.execute({
      name,
      pis,
      id,
    });

    return response.status(201).json(collaborator);
  }
}
