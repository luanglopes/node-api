import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

  @Column({ name: 'published_at', type: 'timestamp' })
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
  @OneToMany(() => AnylistItem, anylistItem => anylistItem.anylist)
  items: AnylistItem[]

  @ManyToMany(() => Image)
  @JoinTable({
    name: 'imageable',
    joinColumn: { name: 'imageable_id' },
    inverseJoinColumn: { name: 'image_id' },
  })
  images: Image[]
}

export default Anylist
