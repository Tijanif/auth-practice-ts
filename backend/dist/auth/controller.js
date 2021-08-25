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
exports.logOutUser = exports.loginUser = void 0;
const services_1 = require("./services");
const authGenerator_1 = require("../utilities/authGenerator");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // user details
    const userDetails = req.body;
    try {
        // check if credential are valid
        const loggedUser = yield services_1.foundUserWithValidation(userDetails);
        // create a token
        const token = authGenerator_1.createToken({
            id: loggedUser.id,
            usename: loggedUser.username,
        });
        res.cookie('token', token, { httpOnly: true });
        // result
        res.json({
            user: {
                msg: `Hello ${loggedUser.username}! You are now logged in`,
                username: loggedUser.username,
            },
        });
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
const logOutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie('token');
    res.json({ msg: 'Sad to see you go! You are now logged out.', data: null });
});
exports.logOutUser = logOutUser;
//# sourceMappingURL=controller.js.map