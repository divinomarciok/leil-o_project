"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("../middleware/validateUser");
const createUser_1 = require("../controllers/createUser");
const authenticateUser_1 = require("../controllers/authenticateUser");
const authenticateToken_1 = require("../middleware/authenticateToken");
const router = (0, express_1.Router)();
router.post('/createuser', validateUser_1.validateUser, createUser_1.createUser);
router.post('/login', authenticateUser_1.authenticateUser);
router.get('/protected', authenticateToken_1.authenticateToken, (req, res) => {
    const tokenData = req.body.tokenData; // Dados do token
    res.status(200).json({ message: 'Acesso concedido', user: tokenData });
});
exports.default = router;
