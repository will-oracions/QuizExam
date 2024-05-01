import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Todo } from "../modules/todos/models/Todo";
import { Assignee } from "../modules/assignees/models/Assignee";
import { generateFakeId, sleep } from "../utils";
import { assigneeFakeData, todoFakeData } from "./fakeData";

const mock = new MockAdapter(axios);

// const as = generateFakeAssignees(10);
// console.log("ASSS", as);

// const td = generateFakeTodos(30, assigneeFakeData);
// console.log(td);

let todos: any[] = todoFakeData;

let assignees: Assignee[] = assigneeFakeData;

// Mock Todos Api
mock.onGet("/todos").reply(
  200,
  todos.map((todo): Todo => {
    const assigneeId = todo.assigneeId;
    delete todo.assigneeId;
    return {
      ...todo,
      assignee: assigneeFakeData.find((a) => a.id === assigneeId),
    };
  })
);

mock.onPost("/todos").reply(async (config) => {
  const todo = JSON.parse(config.data);
  todos.push({ ...todo, id: generateFakeId() });

  await sleep(3000);

  return [201, todo];
});

mock.onPut(/\/todos\/\d+/).reply(async (config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);
  const updatedTodo: Todo = JSON.parse(config.data);
  todos = todos.map((todo) => (todo.id === todoId ? updatedTodo : todo));

  await sleep(3000);

  return [200, updatedTodo];
});

mock.onDelete(/\/todos\/\d+/).reply(async (config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);
  todos = todos.filter((todo) => todo.id !== todoId);

  await sleep(1000);

  return [204];
});

// Mock Assignees API
mock.onGet("/assignees").reply(200, assignees);

mock.onPost("/assignees").reply(async (config) => {
  const data = JSON.parse(config.data);
  const assignee = { ...data, id: generateFakeId() };
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
