import { Todo } from "../../todos/models/Todo";

export interface Assignee {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: AssigneeGenderEnum;
  todos?: Todo[];
}

export enum AssigneeFilterEnum {
  ALL = "1",
  NOTHING_DONE = "2",
  ALL_DONE = "3",
  DONT_HAVE_TASK = "4",
}

export enum AssigneeGenderEnum {
  MAN = "1",
  WOMEN = "2",
}
