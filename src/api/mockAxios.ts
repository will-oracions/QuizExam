import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Todo } from "../todos/models/Todo";

const mock = new MockAdapter(axios);

let todos: Todo[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

mock.onGet("/todos").reply(200, todos);

mock.onPost("/todos").reply((config) => {
  const todo = JSON.parse(config.data);
  todos.push(todo);
  return [201, todo];
});

mock.onPut(/\/todos\/\d+/).reply((config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);
  const updatedTodo: Todo = JSON.parse(config.data);
  todos = todos.map((todo) => (todo.id === todoId ? updatedTodo : todo));
  return [200, updatedTodo];
});

mock.onDelete(/\/todos\/\d+/).reply((config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);
  todos = todos.filter((todo) => todo.id !== todoId);
  return [204];
});

export default mock;
