import { body, param } from 'express-validator';

export const createTaskValidation = [
  body('title').notEmpty().trim().isString(),
  body('description').notEmpty().trim().isString(),
  body('due_date').notEmpty().isISO8601(),
  body('status').isIn(['pending', 'in_progress', 'completed']),
];

export const updateTaskValidation = [
  param('id').notEmpty().isString(),
  body('title').optional().trim().isString(),
  body('description').optional().trim().isString(),
  body('due_date').optional().isISO8601(),
  body('status').optional().isIn(['pending', 'in_progress', 'completed']),
];

export const taskIdValidation = [
  param('id').notEmpty().isString(),
];