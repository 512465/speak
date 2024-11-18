import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { Work } from './entities/work.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  create(createWorkDto: CreateWorkDto) {
    return this.workRepository.save(createWorkDto);
  }

  async findAll() {
    const data = await this.workRepository.find();
    return {
      work: data,
      message: 'success',
    };
  }
}
