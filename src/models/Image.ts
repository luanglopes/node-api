import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  path: string

  @Column('varchar')
  filename: string

  @Column('varchar')
  mimetype: string
}

export default Image
