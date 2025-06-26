import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const globalError:ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    })
}