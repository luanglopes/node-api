import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Block from './Block'

@Entity('antlist_items')
class AnylistItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'anylist_id', type: 'integer' })
  anylistId: number

  @Column({ name: 'list_position', type: 'integer' })
  listPosition: number

  // Relations
  @OneToMany(() => Block, block => block.itemId)
  blocks: Block[]
}

export default AnylistItem
