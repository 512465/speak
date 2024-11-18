import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Food } from 'src/food/entities/food.entity';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;

  @Column()
  name: string;

  @OneToMany(() => Food, (food) => food.work, { eager: true })
  foods: Food[];
}
