"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authgenerator_1 = require("../utilities/authgenerator");
exports.default = (req, res, next) => {
    const token = req.cookies.token;
    const userData = token && authgenerator_1.validateToken(token);
    if (userData) {
        req.currentUser = userData;
        next();
    }
    else {
        res.status(401).json({ err: 'You need to loggin to acces this' });
    }
};
//# sourceMappingURL=loginAuth.js.map