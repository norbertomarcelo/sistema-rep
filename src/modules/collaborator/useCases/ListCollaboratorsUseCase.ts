import { inject, injectable } from 'tsyringe';
import { ICollaboratorsRepository } from '../dtos/ICollaboratorsDTO';
import { Collaborator } from '../entities/Collaborator';

@injectable()
export class ListCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute(): Promise<Collaborator[]> {
    const collaborators = await this.collaboratorsRepository.listAll();

    return collaborators;
  }
}
