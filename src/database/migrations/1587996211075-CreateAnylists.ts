import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateAnylists1587996211075 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'anylists',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'subtitle',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'list_type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'slug',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'published_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'integer',
            unsigned: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP()',
            onUpdate: 'CURRENT_TIMESTAMP()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
            default: null,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('anylists')
  }
}
