import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('blocks')
class Block {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  type: string

  @Column('text')
  data: string

  @Column({ name: 'list_position', type: 'integer' })
  listPosition: number

  @Column({ name: 'item_id', type: 'integer' })
  itemId: number
}

export default Block
