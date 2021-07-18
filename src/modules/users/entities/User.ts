import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  user_name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
