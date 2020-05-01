import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import AnylistItem from './AnylistItem'
import Image from './Image'

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

  // Relations
  @ManyToMany(() => Image)
  @JoinTable({
    name: 'imageable',
    joinColumn: { name: 'imageable_id' },
    inverseJoinColumn: { name: 'image_id' },
  })
  images: Image[]

  @ManyToOne(() => AnylistItem, anylitsItem => anylitsItem.blocks)
  @JoinColumn({ name: 'item_id' })
  item: AnylistItem
}

export default Block
