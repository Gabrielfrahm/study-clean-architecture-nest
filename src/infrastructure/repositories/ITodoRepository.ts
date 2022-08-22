import { ITodoM } from '../models/todo.model';

export interface ITodoRepository {
  insert(todo: ITodoM): Promise<ITodoM>;
  findAll(): Promise<ITodoM[]>;
  findById(id: number): Promise<ITodoM>;
  updateContent(id: number, isDone: boolean): Promise<void>;
  deleteById(id: number): Promise<void>;
}
