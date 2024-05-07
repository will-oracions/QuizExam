import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Todo } from "../modules/todos/models/Todo";
import { Assignee } from "../modules/assignees/models/Assignee";
import { generateFakeId, sleep } from "../utils";
import { assigneeFakeData, todoFakeData } from "./fakeData";
import { User } from "../modules/users/models/User";

// axios.defaults.headers.common["Cache-Control"] = "no-cache";

// const as = generateFakeAssignees(10);
// console.log("ASSS", as);

// const td = generateFakeTodos(30, assigneeFakeData);
// console.log(td);

export const axiosMock = new MockAdapter(axios);

const LOCAL_STORAGE_DATA_KEY = "data";
interface IData {
  todos: any[];
  assignees: Assignee[];
  users: User[];
}

export const saveData = (data: IData) => {
  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
};

export const getData = (): IData | null => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
  if (!savedData) return null;
  try {
    const data = JSON.parse(savedData);
    return data;
  } catch (e) {
    return null;
  }
};

let todos: any[] = getData()?.todos || todoFakeData;
let assignees: Assignee[] = getData()?.assignees || assigneeFakeData;
let users: User[] = getData()?.users || [];

// Mappers

export const toTodoModel = (todo: Todo & { assigneeId?: number }): Todo => {
  const assigneeId = todo.assigneeId;
  delete todo.assigneeId;
  return {
    ...todo,
    assignee: assignees.find((a) => a.id === assigneeId)!,
  };
};

export const toAssigneeModel = (a: Assignee): Assignee => {
  return {
    ...a,
    todos: todos.filter((t) => t.assigneeId === a.id),
  };
};

export const toUserModel = (a: User): User => {
  return {
    ...a,
    // users: users.filter((t) => t.userId === a.id),
  };
};

// Mock Todos Api
axiosMock.onGet("/todos").reply(
  200,
  todos.map((t) => ({ ...t })).map((todo): Todo => toTodoModel(todo))
);

axiosMock.onPost("/todos").reply(async (config) => {
  const todo = JSON.parse(config.data);
  const assignee = todo.assignee;
  delete todo.assignee;
  const newTodo = {
    ...todo,
    assigneeId: assignee.id,
    completed: todo.completed === true,
    id: generateFakeId(),
  };
  todos.push({ ...newTodo });

  delete newTodo.assigneeId;
  newTodo.assignee = assignee;
  // console.log(newTodo, todos);
  saveData({ assignees, todos, users });
  await sleep(3000);

  return [201, newTodo];
});

axiosMock.onPut(/\/todos\/\d+/).reply(async (config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);

  const updatedTodo: Todo = JSON.parse(config.data);
  todos = todos.map((todo) =>
    todo.id === todoId
      ? { ...updatedTodo, assignee: null, assigneeId: updatedTodo.assignee.id }
      : todo
  );

  // console.log(updatedTodo);
  saveData({ assignees, todos, users });
  await sleep(3000);

  return [200, updatedTodo];
});

axiosMock.onDelete(/\/todos\/\d+/).reply(async (config) => {
  const todoId = parseInt(config.url!.split("/").pop()!);
  todos = todos.filter((todo) => todo.id !== todoId);

  saveData({ assignees, todos, users });
  await sleep(1000);

  return [204];
});

// Mock Assignees API
axiosMock.onGet("/assignees").reply(
  200,
  assignees.map((a) => toAssigneeModel(a))
);

axiosMock.onPost("/assignees").reply(async (config) => {
  const data = JSON.parse(config.data);
  const assignee = { ...data, id: generateFakeId() };
  assignees.push(assignee);

  saveData({ assignees, todos, users });
  await sleep(3000);

  return [201, assignee];
});

axiosMock.onPut(/\/assignees\/\d+/).reply(async (config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  const updatedAssignee: Assignee = JSON.parse(config.data);
  assignees = assignees.map((assignee) =>
    assignee.id === assigneeId ? updatedAssignee : assignee
  );

  saveData({ assignees, todos, users });
  await sleep(3000);

  return [200, updatedAssignee];
});

axiosMock.onDelete(/\/assignees\/\d+/).reply(async (config) => {
  const assigneeId = parseInt(config.url!.split("/").pop()!);
  assignees = assignees.filter((assignee) => assignee.id !== assigneeId);

  saveData({ assignees, todos, users });
  await sleep(1000);

  return [204];
});

// Mock Users API
axiosMock.onGet("/users").reply(
  200,
  users.map((a) => toUserModel(a))
);

axiosMock.onPost("/users").reply(async (config) => {
  const data = JSON.parse(config.data);
  const user: User = { ...data, id: generateFakeId() };
  users.push(user);

  saveData({ users, todos, assignees });
  await sleep(3000);

  return [201, user];
});

axiosMock.onPut(/\/users\/\d+/).reply(async (config) => {
  const userId = parseInt(config.url!.split("/").pop()!);
  const updatedUser: User = JSON.parse(config.data);
  users = users.map((user) => (user.id === userId ? updatedUser : user));

  saveData({ users, todos, assignees });

  await sleep(3000);

  return [200, updatedUser];
});

axiosMock.onDelete(/\/users\/\d+/).reply(async (config) => {
  const userId = parseInt(config.url!.split("/").pop()!);
  users = users.filter((user) => user.id !== userId);

  saveData({ users, todos, assignees });

  await sleep(1000);

  return [204];
});

export default axiosMock;
