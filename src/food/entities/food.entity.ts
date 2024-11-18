import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Work } from 'src/work/entities/work.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  month_saled: number;

  @Column()
  unit: string;

  @Column('simple-array')
  food_tag_list: string[];

  @Column()
  price: number;

  @Column()
  picture: string;

  @Column()
  description: string;

  @ManyToOne(() => Work, (work) => work.foods)
  work: Work;
}
