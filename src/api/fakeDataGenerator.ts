// @ts-ignore
import faker from "faker/locale/fr";
import {
  Assignee,
  AssigneeGenderEnum,
} from "../modules/assignees/models/Assignee";
import {
  Todo,
  TodoLabelEnum,
  TodoPriorityEnum,
} from "../modules/todos/models/Todo";

export const generateFakeAssignees = (count: number): Assignee[] => {
  const assignees: Assignee[] = [];
  for (let i = 1; i <= count; i++) {
    const assignee: Assignee = {
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      gender: getRandomEnumValue(AssigneeGenderEnum),
    };
    assignees.push(assignee);
  }
  return assignees;
};

const getRandomEnumValue = (enumeration: any): any => {
  const values = Object.values(enumeration);
  return values[Math.floor(Math.random() * values.length)];
};

export const generateFakeTodos = (
  count: number,
  assignees: Assignee[]
): Partial<Todo>[] => {
  const todos: Partial<Todo>[] = [];
  for (let i = 1; i <= count; i++) {
    const assigneeIndex = Math.floor(Math.random() * assignees.length);
    const todo: Partial<Todo> & { assigneeId: number } = {
      id: i,
      title: faker.lorem.words(),
      assigneeId: assignees[assigneeIndex].id,
      startDate: faker.date.recent(),
      endDate: faker.date.future(),
      prority: getRandomEnumValue(TodoPriorityEnum),
      labels: getRandomEnumValues(TodoLabelEnum, getRandomNumber(1, 3)),
      description: faker.lorem.paragraph(),
      completed: (() => (getRandomNumber(0, 1) === 0 ? false : true))(),
    };
    todos.push(todo);
  }
  return todos;
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomEnumValues = (enumeration: any, count: number): any[] => {
  const values = Object.values(enumeration);
  const randomValues = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * values.length);
    randomValues.push(values[randomIndex]);
  }
  return randomValues;
};

// const fakeTodos = generateFakeTodos(20, fakeAssignees);

// console.log("Fake Todos:", fakeTodos);
