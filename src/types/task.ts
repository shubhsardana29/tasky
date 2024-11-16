export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  due_date: string;
  status: TaskStatus;
  created_at: string;
  updated_at: string;
}