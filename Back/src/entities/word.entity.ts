import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './category.entity';


@Entity({ name: 'word' })
export class Word extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'text', type: 'varchar', length: 50, nullable: false })
  text: string;

  @ManyToMany(() => Category, category => category.words)
  @JoinTable({
    name: 'word_category',
    joinColumn: {
      name: 'id_word', 
      referencedColumnName: 'id' 
    },
    inverseJoinColumn: {
      name: 'id_category',
      referencedColumnName: 'id'
    }
  })
  categories?: Category[];
}
