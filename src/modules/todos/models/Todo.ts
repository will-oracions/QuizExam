import { Assignee } from "../../assignees/models/Assignee";

export interface Todo {
  id: number;
  title?: string;
  assignee?: Assignee;
  startDate?: Date | string;
  endDate?: Date | string;
  prority?: TodoPriorityEnum;
  labels?: TodoLabelEnum[];
  description?: string;
  completed?: boolean;
}

export enum TodoPriorityEnum {
  LOW = "1",
  MEDIUM = "2",
  HIGHT = "3",
}

export enum TodoLabelEnum {
  HTML = "1",
  CSS = "2",
  JQUERY = "3",
  NODEJS = "4",
}

export enum TodoFilterEnum {
  ALL = "1",
  PRORITY = "2",
  TODAY = "3",
  COMPLETED = "4",
}
