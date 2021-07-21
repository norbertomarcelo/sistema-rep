import { AppError } from '../../../errors/AppError';
import { inject, injectable } from 'tsyringe';
import {
  ICollaboratorsRepository,
  ICreateCollaboratorDTO,
} from '../dtos/ICollaboratorsDTO';

@injectable()
export class ModifyCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute({ pis, id, name }: ICreateCollaboratorDTO): Promise<void> {
    const user = await this.collaboratorsRepository.findById(id);

    if (!user) throw new AppError('Collaborator not found');

    await this.collaboratorsRepository.update({ pis, id, name });
  }
}
