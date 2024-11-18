import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  create(createFoodDto: CreateFoodDto) {
    return this.foodRepository.save(createFoodDto);
  }

  findAll() {
    return this.foodRepository.find();
  }
}
