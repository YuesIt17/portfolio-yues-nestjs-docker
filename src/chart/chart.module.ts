import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Chart } from 'src/models/chart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chart])],
  exports: [TypeOrmModule],
})
export class ChartModule {}
