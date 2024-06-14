import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Word } from './word.entity';
import { Category } from './category.entity';


@Entity({ name: 'word_category' })
export class WordCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_word', nullable: false })
  idWord: number;

  @Column({ name: 'id_category', nullable: false })
  idCategory: number;

  @ManyToOne(() => Word, { nullable: false })
  @JoinColumn({ name: 'id_word' , referencedColumnName: 'id'})
  words?: Word[];

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'id_category', referencedColumnName: 'id'})
  categories?: Category[];
}