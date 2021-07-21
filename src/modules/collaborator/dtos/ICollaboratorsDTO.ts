import { Collaborator } from '../entities/Collaborator';

interface ICreateCollaboratorDTO {
  pis: number;
  id?: string;
  name: string;
}

interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<void>;
  update(data: ICreateCollaboratorDTO): Promise<void>;
  findByPis(pis: number): Promise<Collaborator>;
  findById(id: string): Promise<Collaborator>;
}

export { ICreateCollaboratorDTO, ICollaboratorsRepository };
