import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateAnylistItem1588048711764
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'anylist_items',
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
            name: 'anylist_id',
            type: 'integer',
            unsigned: true,
          },
          {
            name: 'list_position',
            type: 'smallint',
            length: '1',
            unsigned: true,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('anylist_items')
  }
}
