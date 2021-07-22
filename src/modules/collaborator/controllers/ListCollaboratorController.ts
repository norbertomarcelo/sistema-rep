import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCollaboratorUseCase } from '../useCases/CreateCollaboratorUseCase';
import { ListCollaboratorUseCase } from '../useCases/ListCollaboratorsUseCase';

export class ListCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCollaboratorUseCase = container.resolve(
      ListCollaboratorUseCase
    );

    const collaborators = await createCollaboratorUseCase.execute();

    return response.status(201).json(collaborators);
  }
}
