import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCollaboratorUseCase } from '../useCases/DeleteCollaboratorUseCase';

export class DeleteCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const modifyCollaboratorUseCase = container.resolve(
      DeleteCollaboratorUseCase
    );

    const collaborator = await modifyCollaboratorUseCase.execute(id);

    return response.status(201).send();
  }
}
