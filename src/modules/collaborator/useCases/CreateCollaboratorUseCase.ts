import { inject, injectable } from 'tsyringe';
import {
  ICollaboratorsRepository,
  ICreateCollaboratorDTO,
} from '../dtos/ICollaboratorsDTO';

@injectable()
export class CreateCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute({ pis, id, name }: ICreateCollaboratorDTO): Promise<void> {
    const collaboratorAlreadyExists =
      await this.collaboratorsRepository.findByPis(pis);

    if (collaboratorAlreadyExists)
      throw new Error('Collaborator already exists!');

    await this.collaboratorsRepository.create({
      pis,
      id,
      name,
    });
  }
}
