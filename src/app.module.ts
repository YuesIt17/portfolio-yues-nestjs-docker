import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChartHttpModule } from './chart/chart-http.module';
import datasourceConfig from './datasource-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [datasourceConfig],
    }),
    ChartHttpModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
