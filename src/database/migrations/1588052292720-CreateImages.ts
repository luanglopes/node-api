import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateImages1588052292720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
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
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'filename',
            type: 'varchar',
          },
          {
            name: 'mimetype',
            type: 'varchar',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}
