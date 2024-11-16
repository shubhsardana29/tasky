import { describe, it, expect, beforeEach } from 'vitest';
import { taskService } from './taskService';

describe('TaskService', () => {
  beforeEach(() => {
    // Reset tasks before each test
    taskService['tasks'].clear();
  });

  it('should create a new task', () => {
    const taskData = {
      title: 'Test Task',
      description: 'Test Description',
      due_date: '2024-01-01T00:00:00.000Z',
      status: 'pending' as const,
    };

    const task = taskService.createTask(taskData);

    expect(task).toMatchObject({
      ...taskData,
      id: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });

  it('should retrieve a task by id', () => {
    const taskData = {
      title: 'Test Task',
      description: 'Test Description',
      due_date: '2024-01-01T00:00:00.000Z',
      status: 'pending' as const,
    };

    const createdTask = taskService.createTask(taskData);
    const retrievedTask = taskService.getTaskById(createdTask.id);

    expect(retrievedTask).toEqual(createdTask);
  });

  it('should mark a task as complete', () => {
    const taskData = {
      title: 'Test Task',
      description: 'Test Description',
      due_date: '2024-01-01T00:00:00.000Z',
      status: 'pending' as const,
    };

    const createdTask = taskService.createTask(taskData);
    const completedTask = taskService.completeTask(createdTask.id);

    expect(completedTask?.status).toBe('completed');
  });
});