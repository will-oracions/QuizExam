import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Todo } from "../modules/todos/models/Todo";
import { Assignee } from "../modules/assignees/models/Assignee";

const mock = new MockAdapter(axios);

let todos: Todo[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
let assignees: Assignee[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

// Mock Todos Api
mock.onGet("/todos").reply(200, todos);

mock.onPost("/todos").reply((config) => {
  const todo = JSON.parse(config.data);
  todos.push({ ...todo, id: todos.length + 1 });
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

// Mock Assignees API
mock.onGet("/assignees").reply(200, assignees);

mock.onPost("/assignees").reply((config) => {
  const assignee = JSON.parse(config.data);
  assignees.push({ ...assignee, id: assignee.length + 1 });
  return [201, assignee];
});

mock.onPut(/\/assignees\/\d+/).reply((config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  const updatedAssignee: Assignee = JSON.parse(config.data);
  assignees = assignees.map((assignee) =>
    assignee.id === assigneeId ? updatedAssignee : assignee
  );
  return [200, updatedAssignee];
});

mock.onDelete(/\/assignees\/\d+/).reply((config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  assignees = assignees.filter((assignee) => assignee.id !== assigneeId);
  return [204];
});

export default mock;
