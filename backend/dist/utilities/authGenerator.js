"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET_KEY = process.env.JWT;
const createToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET_KEY);
};
exports.createToken = createToken;
const validateToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET_KEY);
};
exports.validateToken = validateToken;
//# sourceMappingURL=authGenerator.js.map