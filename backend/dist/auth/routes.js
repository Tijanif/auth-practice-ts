"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../resources/users/controller");
const controller_2 = require("./controller");
const router = express_1.Router();
router.route('/login').post(controller_2.loginUser);
router.route('/logout').post(controller_2.logOutUser);
router.route('/signup').post(controller_1.createAUser);
exports.default = router;
//# sourceMappingURL=routes.js.map