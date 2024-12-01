import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToEnterpriseProductsTable2497934585179 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE enterprise_products ADD COLUMN user_id INT;
        `);
        await queryRunner.query(`
            ALTER TABLE enterprise_products
            ADD CONSTRAINT fk_user_id
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE enterprise_products DROP COLUMN user_id;
        `);
    }
}
