"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsTable1687805012395 = void 0;
const typeorm_1 = require("typeorm");
class CreateProductsTable1687805012395 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("products");
        });
    }
}
exports.CreateProductsTable1687805012395 = CreateProductsTable1687805012395;
