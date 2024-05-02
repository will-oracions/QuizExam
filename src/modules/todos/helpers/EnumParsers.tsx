import { TodoLabelEnum, TodoPriorityEnum } from "../models/Todo";

export const todoPriorityEnumToLabel = (gender: TodoPriorityEnum): string => {
  switch (gender) {
    case TodoPriorityEnum.LOW:
      return "Low";
    case TodoPriorityEnum.HIGHT:
      return "Hight";
    case TodoPriorityEnum.MEDIUM:
      return "Hight";
  }
};

export const todoLabelEnumToLabel = (label: TodoLabelEnum): string => {
  switch (label) {
    case TodoLabelEnum.CSS:
      return "CSS";
    case TodoLabelEnum.HTML:
      return "HTML";
    case TodoLabelEnum.JQUERY:
      return "JQuery";
    case TodoLabelEnum.NODEJS:
      return "Node.js";
  }
};
