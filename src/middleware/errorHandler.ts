import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validator';

export interface ApiError extends Error {
  statusCode?: number;
  errors?: ValidationError[];
}

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
      errors: err.errors,
    },
  });
};