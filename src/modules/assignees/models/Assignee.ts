export interface Assignee {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  gender: AssigneeGenderEnum;
}

export enum AssigneeFilterEnum {
  NOTHING_DONE,
  ALL_DONE,
  DONT_HAVE_TASK,
}

export enum AssigneeGenderEnum {
  MAN,
  WOMEN,
}
