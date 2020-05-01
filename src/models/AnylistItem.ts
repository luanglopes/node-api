import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import Block from './Block'
import Anylist from './Anylist'

@Entity('anylist_items')
class AnylistItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'anylist_id', type: 'integer' })
  anylistId: number

  @Column({ name: 'list_position', type: 'integer' })
  listPosition: number

  // Relations
  @OneToMany(() => Block, block => block.item)
  blocks: Block[]

  @ManyToOne(() => Anylist, anylist => anylist.items)
  @JoinColumn({ name: 'anylist_id' })
  anylist: Anylist
}

export default AnylistItem
