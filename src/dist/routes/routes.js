"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("../middleware/validateUser");
const createUser_1 = require("../controllers/createUser");
const authenticateUser_1 = require("../controllers/authenticateUser");
const authenticateToken_1 = require("../middleware/authenticateToken");
const createEnterprise_1 = require("../controllers/createEnterprise");
const createProduct_1 = require("../controllers/createProduct");
const validateProduct_1 = require("../middleware/validateProduct");
const validateEnterpriseProduct_1 = require("../middleware/validateEnterpriseProduct");
const addEnterpriseProdudct_1 = require("../controllers/addEnterpriseProdudct");
const getAllProducts_1 = require("../controllers/getAllProducts");
const getAllEnterprises_1 = require("../controllers/getAllEnterprises");
const getProductById_1 = require("../controllers/getProductById");
const getEnterpriseProductsByProductId_1 = require("../controllers/getEnterpriseProductsByProductId");
const router = (0, express_1.Router)();
router.post('/createuser', validateUser_1.validateUser, createUser_1.createUser);
router.post('/login', authenticateUser_1.authenticateUser);
router.post('/createenterprise', authenticateToken_1.authenticateToken, createEnterprise_1.createEnterprise);
router.post('/createproduct', authenticateToken_1.authenticateToken, validateProduct_1.validateProduct, createProduct_1.createProduct);
router.post('/addenterpriseproduct', authenticateToken_1.authenticateToken, validateEnterpriseProduct_1.validateEnterpriseProduct, addEnterpriseProdudct_1.addEnterpriseProduct);
router.get('/getAllProducts', authenticateToken_1.authenticateToken, getAllProducts_1.getAllProducts);
router.get('/getEnterprises', authenticateToken_1.authenticateToken, getAllEnterprises_1.getAllEnterprises);
router.get('/products/:productId', authenticateToken_1.authenticateToken, getProductById_1.getProductById);
router.get('/products/:productId/enterprises', authenticateToken_1.authenticateToken, getEnterpriseProductsByProductId_1.getEnterpriseProductsByProductId);
router.get("/debug", (req, res) => {
    res.status(200).json({ message: "Debug funcionando!" });
});
exports.default = router;
