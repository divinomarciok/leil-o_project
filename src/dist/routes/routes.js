"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("../middleware/validateUser");
const controllers_1 = require("../controllers/controllers");
const router = (0, express_1.Router)();
router.post('/createuser', validateUser_1.validateUser, controllers_1.createUser);
exports.default = router;
