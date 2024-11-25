"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("../middleware/validateUser");
const createUser_1 = require("../controllers/createUser");
const router = (0, express_1.Router)();
router.post('/createuser', validateUser_1.validateUser, createUser_1.createUser);
exports.default = router;
