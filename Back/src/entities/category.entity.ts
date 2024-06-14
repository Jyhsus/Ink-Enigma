import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Word } from './word.entity';


@Entity({ name: 'category'})
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;
  
  @ManyToMany(() => Word, word => word.categories, { eager: true })
  @JoinTable({
    name: 'word_category',
    joinColumn: {
      name: 'id_category',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'id_word', 
      referencedColumnName: 'id' 
    }
  })
  words?: Word[];
}
