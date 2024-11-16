import { Router, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { taskService } from '../services/taskService';
import { createTaskValidation, updateTaskValidation, taskIdValidation } from '../middleware/validation';

const router = Router();

router.get('/', (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
});

router.get('/:id', taskIdValidation, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const task = taskService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

router.post('/', createTaskValidation, (req: Request, res:Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const task = taskService.createTask(req.body);
  res.status(201).json(task);
});

router.put('/:id', updateTaskValidation, (req:Request, res:Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const task = taskService.updateTask(req.params.id, req.body);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

router.delete('/:id', taskIdValidation, (req:Request, res:Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const deleted = taskService.deleteTask(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(204).send();
});

router.patch('/:id/complete', taskIdValidation, (req:Request, res:Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const task = taskService.completeTask(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

export default router;