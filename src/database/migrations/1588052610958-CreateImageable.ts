import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateImageable1588052610958
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'imageable',
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
            name: 'image_id',
            type: 'integer',
            unsigned: true,
          },
          {
            name: 'imageable_id',
            type: 'integer',
            unsigned: true,
          },
          {
            name: 'imageable_type',
            type: 'varchar',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imageable')
  }
}
