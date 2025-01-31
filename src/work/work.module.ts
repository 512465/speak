import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Food } from 'src/food/entities/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Work, Food])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
