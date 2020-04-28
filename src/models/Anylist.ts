import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import AnylistItem from './AnylistItem'
import Image from './Image'

@Entity('anylists')
class Anylist {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  title: string

  @Column('varchar')
  subtitle: string

  @Column({ name: 'list_type', type: 'varchar' })
  listType: string

  @Column('varchar')
  slug: string

  @Column('timestamp')
  publishedAt: Date

  @Column({ name: 'user_id', type: 'integer' })
  userId: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date

  // Relations
  @OneToMany(() => AnylistItem, anylistItem => anylistItem.anylistId)
  items: AnylistItem[]

  @ManyToMany(() => Image)
  @JoinTable({ name: 'imageable' })
  coverImage: Image[]
}

export default Anylist
