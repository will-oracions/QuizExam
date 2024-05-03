import { Assignee } from "../models/Assignee";

export const toAssigneeExportable = (assignees: Assignee[]): Assignee[] => {
  return assignees.map((item) => {
    const { todos, ...rest } = item;
    return rest;
  });
};
