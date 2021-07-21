import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCollaborator1626743491971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SEQUENCE serial START 0000000000000001');

    await queryRunner.createTable(
      new Table({
        name: 'collaborators',
        columns: [
          {
            name: 'pis',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'id',
            type: 'uuid',
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'matriculation',
            type: `integer default nextval('serial')`,
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'varchar',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP SEQUENCE serial');
    await queryRunner.dropTable('collaborators');
  }
}
