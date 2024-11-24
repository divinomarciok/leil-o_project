import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnterpriseProductsTable1687805340000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "enterprise_products",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "enterprise_id",
                        type: "int",
                    },
                    {
                        name: "product_id",
                        type: "int",
                    },
                    {
                        name: "price",
                        type: "numeric",
                        precision: 10,
                        scale: 2,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["enterprise_id"],
                        referencedTableName: "enterprise",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["product_id"],
                        referencedTableName: "products",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("enterprise_products");
    }
}
