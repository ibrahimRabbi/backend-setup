"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        method: req.method,
    });
};
exports.notFound = notFound;
