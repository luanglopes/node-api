import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('imageable')
class Imageable {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'image_id', type: 'integer' })
  imageId: number

  @Column({ name: 'imageable_id', type: 'integer' })
  imageableId: number

  @Column({ name: 'imageable_type', type: 'varchar' })
  imageableType: string
}

export default Imageable
