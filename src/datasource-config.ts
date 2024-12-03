import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Chart } from './models/chart.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: 'admin',
  password: 'adminyuitpassword',
  database: 'yuit-chart-db',
  entities: [Chart],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsTableName: '__migrations',
};

export default registerAs('typeorm', () => dataSourceOptions);
export const dataSource = new DataSource(dataSourceOptions);
