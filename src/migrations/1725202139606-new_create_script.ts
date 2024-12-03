import { MigrationInterface, QueryRunner } from 'typeorm';

import { initDataChart } from './initDataChart';

export class NewCreateScript1725202139606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "chart" ("data") VALUES('${JSON.stringify(initDataChart)}');`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
