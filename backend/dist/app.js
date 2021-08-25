"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./resources/users/routes"));
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// App initialisation
const app = express_1.default();
// Middlewares
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
// Routes
app.use('/users', routes_1.default);
// catch all routes
app.all('*', (req, res) => {
    res.json({ msg: 'There is no routes here - try again' });
});
module.exports = app;
//# sourceMappingURL=app.js.map