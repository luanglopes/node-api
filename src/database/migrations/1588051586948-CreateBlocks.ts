import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateBlocks1588051586948 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'blocks',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            unsigned: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'data',
            type: 'text',
          },
          {
            name: 'list_position',
            type: 'smallint',
            length: '1',
            unsigned: true,
          },
          {
            name: 'item_id',
            type: 'integer',
            unsigned: true,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('blocks')
  }
}
