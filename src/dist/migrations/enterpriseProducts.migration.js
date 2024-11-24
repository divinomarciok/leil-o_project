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
exports.CreateEnterpriseProductsTable1687805340000 = void 0;
const typeorm_1 = require("typeorm");
class CreateEnterpriseProductsTable1687805340000 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("enterprise_products");
        });
    }
}
exports.CreateEnterpriseProductsTable1687805340000 = CreateEnterpriseProductsTable1687805340000;
