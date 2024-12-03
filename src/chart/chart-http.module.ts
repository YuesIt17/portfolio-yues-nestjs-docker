import { Module } from '@nestjs/common';

import { ChartModule } from './chart.module';
import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';

@Module({
  imports: [ChartModule],
  providers: [ChartService],
  controllers: [ChartController],
})
export class ChartHttpModule {}
