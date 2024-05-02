import { LabelOutlined } from "@mui/icons-material";
import { TodoLabelEnum, TodoPriorityEnum } from "../models/Todo";
import { Alert, Badge, Typography } from "@mui/material";

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

export const todoLabelEnumToLabel = (
  label: TodoLabelEnum
): string | React.ReactNode => {
  switch (label) {
    case TodoLabelEnum.CSS:
      return <LabelOutlined style={{ color: "black" }} />;
    case TodoLabelEnum.HTML:
      return <LabelOutlined style={{ color: "#41a0ff" }} />;
    case TodoLabelEnum.JQUERY:
      return <LabelOutlined style={{ color: "purple" }} />;
    case TodoLabelEnum.NODEJS:
      return <LabelOutlined style={{ color: "orangered" }} />;
  }
};
