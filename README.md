# Task Management API

A RESTful API for managing tasks built with Express and TypeScript.

## Features

- CRUD operations for tasks
- Task completion endpoint
- Input validation
- Error handling
- Unit tests

## API Endpoints

- GET /tasks - Get all tasks
- GET /tasks/:id - Get a specific task
- POST /tasks - Create a new task
- PUT /tasks/:id - Update a task
- DELETE /tasks/:id - Delete a task
- PATCH /tasks/:id/complete - Mark a task as complete

### Hosted Link

- 

### API Documentation 
-  https://elements.getpostman.com/redirect?entityId=26061145-1e247b29-761c-435b-b3fd-d2f45a5d0d93&entityType=collection

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Task Schema

```typescript
{
  id: string;
  title: string;
  description: string;
  due_date: string; // ISO 8601 format
  status: 'pending' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
}
```