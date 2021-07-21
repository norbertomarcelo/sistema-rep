import { getRepository, Repository } from 'typeorm';
import {
  ICreateCollaboratorDTO,
  ICollaboratorsRepository,
} from '../dtos/ICollaboratorsDTO';
import { Collaborator } from '../entities/Collaborator';

export class CollaboratorsRepository implements ICollaboratorsRepository {
  private repository: Repository<Collaborator>;

  constructor() {
    this.repository = getRepository(Collaborator);
  }

  async findById(id: string): Promise<Collaborator> {
    const collaborator = await this.repository.findOne({ id });

    return collaborator;
  }

  async findByPis(pis: number): Promise<Collaborator> {
    const collaborator = await this.repository.findOne(pis);

    return collaborator;
  }

  async create({ pis, id, name }: ICreateCollaboratorDTO): Promise<void> {
    const collaborator = this.repository.create({
      pis,
      id,
      name,
    });

    await this.repository.save(collaborator);
  }

  async update({ name, pis, id }: ICreateCollaboratorDTO): Promise<void> {
    console.log(id);
    await this.repository.update(id, { name: name, pis: pis });
  }
}
