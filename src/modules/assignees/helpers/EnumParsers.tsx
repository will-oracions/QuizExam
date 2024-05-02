import { AssigneeGenderEnum } from "../models/Assignee";

export const genderEnumToLabel = (gender: AssigneeGenderEnum): string => {
  switch (gender) {
    case AssigneeGenderEnum.MAN:
      return "Homme";
    case AssigneeGenderEnum.WOMEN:
      return "Femme";
  }
};
