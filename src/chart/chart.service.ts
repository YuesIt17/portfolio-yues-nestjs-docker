import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Chart } from 'src/models/chart.entity';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(Chart)
    private chartRepository: Repository<Chart>,
  ) {}

  getChart(): Promise<Chart[]> {
    return this.chartRepository.find();
  }
}
