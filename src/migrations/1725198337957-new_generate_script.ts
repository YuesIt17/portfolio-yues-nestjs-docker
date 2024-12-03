import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewGenerateScript1725198337957 implements MigrationInterface {
  name = 'NewGenerateScript1725198337957';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "chart" ("id" SERIAL NOT NULL, "data" json NOT NULL, CONSTRAINT "PK_992ed0006df2077b57b2d06eea4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "chart"`);
  }
}
