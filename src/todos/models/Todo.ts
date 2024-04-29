export interface Todo {
  id: number;
  title: string;
  assignee: Assignee;
  startDate: Date;
  endDate: Date;
  prority: TodoPrority;
  labels: TodoLabel[];
  description: string;
}

export interface Assignee {
  name: string;
  email: string;
  phone: string;
}

export enum TodoPrority {
  LOW,
  MEDIUM,
  HIGHT,
}

export enum TodoLabel {
  HTML,
  CSS,
  JQUERY,
  NODEJS,
}
