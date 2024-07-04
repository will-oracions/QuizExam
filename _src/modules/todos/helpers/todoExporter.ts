import { Todo } from "../models/Todo";

export type IExportableTodo = Todo & { assigneeName: string };

export const toExportableTodo = (todos: Todo[]): Partial<IExportableTodo>[] => {
  return todos.map((item) => {
    const { assignee, endDate, startDate, prority, labels, ...rest } = item;
    return { ...rest, assigneeName: assignee.name };
  });
};
