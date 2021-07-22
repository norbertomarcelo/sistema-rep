import { AppError } from '../../../errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICollaboratorsRepository } from '../dtos/ICollaboratorsDTO';

@injectable()
export class DeleteCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const collaboratorAlreadyExists =
      await this.collaboratorsRepository.findById(id);

    if (!collaboratorAlreadyExists)
      throw new AppError('Collaborator not found');

    await this.collaboratorsRepository.destroy(id);
  }
}
