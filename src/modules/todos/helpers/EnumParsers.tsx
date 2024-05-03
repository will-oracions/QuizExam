import { LabelOutlined } from "@mui/icons-material";
import { TodoLabelEnum, TodoPriorityEnum } from "../models/Todo";
import ProrityLabel from "../components/ProrityLabel";

export interface IPriorityEnumParser {
  value: TodoPriorityEnum;
  label: string | React.ReactNode;
}

export const priorityEnumParserConfig: IPriorityEnumParser[] = [
  {
    value: TodoPriorityEnum.LOW,
    label: (
      <ProrityLabel color="burlywood" labelToTranslate="todos.priority.low" />
    ),
  },
  {
    value: TodoPriorityEnum.MEDIUM,
    label: (
      <ProrityLabel
        color="yellowgreen"
        labelToTranslate="todos.priority.medium"
      />
    ),
  },
  {
    value: TodoPriorityEnum.HIGHT,
    label: (
      <ProrityLabel color="orangered" labelToTranslate="todos.priority.hight" />
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
