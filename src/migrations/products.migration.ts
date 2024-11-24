import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1687805012395 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "nomeProd",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "categoriaProd",
                        type: "varchar",
                        length: "50",
                        isNullable: true,
                    },
                    {
                        name: "tamanhoProd",
                        type: "varchar",
                        length: "50",
                        isNullable: true,
                    },
                    {
                        name: "quantidadeProd",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }
}
