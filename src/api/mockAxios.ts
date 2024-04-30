import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Todo } from "../modules/todos/models/Todo";
import { Assignee } from "../modules/assignees/models/Assignee";
import { sleep } from "../utils";

const mock = new MockAdapter(axios);

let todos: Todo[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

let assignees: Assignee[] = [
  { id: 1, name: "Snow", email: "Jon", phone: "4545174421" },
  { id: 2, name: "Lannister", email: "Cersei", phone: "4545174421" },
  { id: 3, name: "Lannister", email: "Jaime", phone: "4545174421" },
  { id: 4, name: "Stark", email: "Arya", phone: "4545174421" },
  { id: 5, name: "Targaryen", email: "Daenerys", phone: "4545174421" },
  { id: 6, name: "Melisandre", email: "", phone: "4545174421" },
  { id: 7, name: "Clifford", email: "Ferrara", phone: "4545174421" },
  { id: 8, name: "Frances", email: "Rossini", phone: "4545174421" },
  { id: 9, name: "Roxie", email: "Harvey", phone: "4545174421" },
];

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

mock.onPost("/assignees").reply(async (config) => {
  const data = JSON.parse(config.data);
  const assignee = { ...data, id: assignees.length + 1 };
  assignees.push(assignee);

  await sleep(3000);

  return [201, assignee];
});

mock.onPut(/\/assignees\/\d+/).reply(async (config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  const updatedAssignee: Assignee = JSON.parse(config.data);
  assignees = assignees.map((assignee) =>
    assignee.id === assigneeId ? updatedAssignee : assignee
  );

  await sleep(3000);

  return [200, updatedAssignee];
});

mock.onDelete(/\/assignees\/\d+/).reply(async (config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  assignees = assignees.filter((assignee) => assignee.id !== assigneeId);

  await sleep(1000);

  return [204];
});

export default mock;
