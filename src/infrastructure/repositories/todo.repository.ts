import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { ITodoM } from '../models/todo.model';
import { ITodoRepository } from './ITodoRepository';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoEntityRepository: Repository<Todo>,
  ) {}

  async insert(todo: ITodoM): Promise<ITodoM> {
    const todoEntity = this.toTodoEntity(todo);
    await this.todoEntityRepository.insert(todoEntity);
    return todoEntity;
  }
  findAll(): Promise<ITodoM[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<ITodoM> {
    throw new Error('Method not implemented.');
  }
  updateContent(id: number, isDone: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private toTodo(todoEntity: Todo): ITodoM {
    const todo: ITodoM = new ITodoM();

    todo.id = todoEntity.id;
    todo.content = todoEntity.content;
    todo.isDone = todoEntity.isDone;
    todo.createdate = todoEntity.createdate;
    todo.updateddate = todoEntity.updateddate;

    return todo;
  }

  private toTodoEntity(todo: ITodoM): Todo {
    const todoEntity: Todo = new Todo();

    todoEntity.id = todo.id;
    todoEntity.content = todo.content;
    todoEntity.isDone = todo.isDone;

    return todoEntity;
  }
}
