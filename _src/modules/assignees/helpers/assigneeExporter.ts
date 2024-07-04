import { Assignee } from "../models/Assignee";
import { genderEnumToLabelText } from "./EnumParsers";

export const toAssigneeExportable = (
  assignees: Assignee[]
): Partial<Assignee & { genderLabel: string }>[] => {
  return assignees.map((item) => {
    const { todos, gender, ...rest } = item;
    return { ...rest, genderLabel: genderEnumToLabelText(gender) };
  });
};
