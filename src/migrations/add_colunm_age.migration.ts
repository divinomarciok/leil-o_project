import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAgeToUsersTable1687804585126  implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users ADD COLUMN age INT;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users DROP COLUMN age;
        `);
    }
}
