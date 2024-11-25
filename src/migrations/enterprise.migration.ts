import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnterpriseTable1687804585125 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "enterprise",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "nomeEmp",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        length: "20",
                        isUnique: true,
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
        await queryRunner.dropTable("enterprise");
    }
}
