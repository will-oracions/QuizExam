import { LabelOutlined } from "@mui/icons-material";
import { TodoLabelEnum, TodoPriorityEnum } from "../models/Todo";
import { Typography } from "@mui/material";
import i18n from "i18next";

export interface IPriorityEnumParser {
  value: TodoPriorityEnum;
  label: string | React.ReactNode;
}

export const priorityEnumParserConfig: IPriorityEnumParser[] = [
  {
    value: TodoPriorityEnum.LOW,
    label: (
      <Typography fontSize="1rem" style={{ color: "burlywood" }}>
        {`${i18n.t("todos.priority.low")}`}
      </Typography>
    ),
  },

  {
    value: TodoPriorityEnum.MEDIUM,
    label: (
      <Typography fontSize="1rem" style={{ color: "yellowgreen" }}>
        {`${i18n.t("appDescription")}`}
      </Typography>
    ),
  },
  {
    value: TodoPriorityEnum.HIGHT,
    label: (
      <Typography fontSize="1rem" style={{ color: "orangered" }}>
        {`${i18n.t("todos.priority.hight")}`}
      </Typography>
    ),
  },
];

export const todoPriorityEnumToLabel = (
  priority: TodoPriorityEnum
): string | React.ReactNode => {
  const result = priorityEnumParserConfig.find(
    (config) => config.value === priority
  );

  return result!.label;
};

export interface ILabelEnumParser {
  value: TodoLabelEnum;
  label: string | React.ReactNode;
}

export const labelEnumParserConfig: ILabelEnumParser[] = [
  {
    value: TodoLabelEnum.CSS,
    label: <LabelOutlined style={{ color: "gray" }} />,
  },

  {
    value: TodoLabelEnum.HTML,
    label: <LabelOutlined style={{ color: "#41a0ff" }} />,
  },

  {
    value: TodoLabelEnum.JQUERY,
    label: <LabelOutlined style={{ color: "lightgreen" }} />,
  },

  {
    value: TodoLabelEnum.NODEJS,
    label: <LabelOutlined style={{ color: "orangered" }} />,
  },
];

export const todoLabelEnumToLabel = (
  label: TodoLabelEnum
): string | React.ReactNode => {
  const labelValue = labelEnumParserConfig.find(
    (config) => config.value === label
  );
  return labelValue!.label;
};
