import { LabelOutlined } from "@mui/icons-material";
import { TodoLabelEnum, TodoPriorityEnum } from "../models/Todo";
import { Typography } from "@mui/material";

export const todoPriorityEnumToLabel = (
  gender: TodoPriorityEnum
): string | React.ReactNode => {
  switch (gender) {
    case TodoPriorityEnum.LOW:
      return <Typography fontSize="1rem">Low</Typography>;
    case TodoPriorityEnum.HIGHT:
      return (
        <Typography fontSize="xs" style={{ color: "orangered" }}>
          Hight
        </Typography>
      );
    case TodoPriorityEnum.MEDIUM:
      return (
        <Typography fontSize="xs" style={{ color: "#41a0ff" }}>
          Medium
        </Typography>
      );
  }
};

export const labelEnumConfig: {
  value: TodoLabelEnum;
  label: string | React.ReactNode;
}[] = [
  {
    value: TodoLabelEnum.CSS,
    label: <LabelOutlined style={{ color: "black" }} />,
  },

  {
    value: TodoLabelEnum.HTML,
    label: <LabelOutlined style={{ color: "#41a0ff" }} />,
  },

  {
    value: TodoLabelEnum.JQUERY,
    label: <LabelOutlined style={{ color: "purple" }} />,
  },

  {
    value: TodoLabelEnum.NODEJS,
    label: <LabelOutlined style={{ color: "orangered" }} />,
  },
];

export const todoLabelEnumToLabel = (
  label: TodoLabelEnum
): string | React.ReactNode => {
  const labelValue = labelEnumConfig.find((config) => config.value === label);
  return labelValue!.label;
};
