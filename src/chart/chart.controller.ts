import { Controller, Get } from '@nestjs/common';

import { Chart } from 'src/models/chart.entity';

import { ChartService } from './chart.service';

@Controller('data_chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get()
  getChart(): Promise<Chart[]> {
    return this.chartService.getChart();
  }
}
