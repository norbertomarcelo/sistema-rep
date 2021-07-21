import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('collaborators')
@Unique(['id'])
@Unique(['matriculation'])
export class Collaborator {
  @PrimaryColumn()
  pis: number;

  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  matriculation: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
