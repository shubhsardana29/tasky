import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../types/task';

class TaskService {
  private tasks: Map<string, Task> = new Map();

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.get(id);
  }

  createTask(taskData: Omit<Task, 'id' | 'created_at' | 'updated_at'>): Task {
    const now = new Date().toISOString();
    const task: Task = {
      id: uuidv4(),
      ...taskData,
      created_at: now,
      updated_at: now,
    };
    this.tasks.set(task.id, task);
    return task;
  }

  updateTask(id: string, taskData: Partial<Omit<Task, 'id' | 'created_at' | 'updated_at'>>): Task | undefined {
    const task = this.tasks.get(id);
    if (!task) return undefined;

    const updatedTask: Task = {
      ...task,
      ...taskData,
      updated_at: new Date().toISOString(),
    };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }

  completeTask(id: string): Task | undefined {
    const task = this.tasks.get(id);
    if (!task) return undefined;

    const updatedTask: Task = {
      ...task,
      status: 'completed' as TaskStatus,
      updated_at: new Date().toISOString(),
    };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }
}

export const taskService = new TaskService();