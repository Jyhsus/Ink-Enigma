import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Category } from './category.entity';


@Entity({ name: 'room' })
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ name: 'state', type: 'varchar', default: 'Sin iniciar' })
  state: string;
  
  @Column({ name: 'id_category', nullable: false })
  idCategory: number;

  @ManyToOne(() => Category, { nullable: false, eager: true })
  @JoinColumn({ name: "id_category" })
  categories?: Category[];
}
