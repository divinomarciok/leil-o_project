import { MigrationInterface, QueryRunner } from "typeorm";


export class RemoveAgeToUsersTable2497934585178  implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users DROP COLUMN age INT;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users DROP COLUMN age;
        `);
    }
}
