import { Collaborator } from '../entities/Collaborator';

interface ICreateCollaboratorDTO {
  id?: string;
  pis: number;
  name: string;
}

interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<void>;
  update(data: ICreateCollaboratorDTO): Promise<void>;
  destroy(id: string): Promise<void>;
  listAll(): Promise<Collaborator[]>;
  findByPis(pis: number): Promise<Collaborator>;
  findById(id: string): Promise<Collaborator>;
}

export { ICreateCollaboratorDTO, ICollaboratorsRepository };
