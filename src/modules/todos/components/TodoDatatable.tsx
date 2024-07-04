import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Todo } from "../models/Todo";
import {
  todoLabelEnumToLabel,
  todoPriorityEnumToLabel,
} from "../helpers/EnumParsers";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DatatableCelToDateCalendar } from "../../../helpers/dateHelper";
import { Star } from "@mui/icons-material";

interface Props {
  todos: Todo[];
  handleEdit: (row: Todo) => void;
  handleDelete: (row: Todo) => void;
}

const TodoDatatable = ({ todos, handleEdit, handleDelete }: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Todo>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "assignee",
      headerName: t("todos.assignedToLabel"),
      width: 150,
      renderCell: (params) => {
        // console.log(params.row);
        return params.row.assignee?.name;
      },
    },
    { field: "title", headerName: t("todos.titleLabel"), width: 150 },
    {
      field: "description",
      headerName: t("todos.descriptionLabel"),
      minWidth: 120,
      flex: 1,
    },
    {
      field: "favorite",
      headerName: t("todos.favoriteLabel"),
      minWidth: 120,
      flex: 1,
      renderCell: (params) => <Star color="primary" />,
    },
    {
      field: "startDate",
      headerName: t("todos.startDateLabel"),
      minWidth: 120,
      flex: 1,
      renderCell: (params) => DatatableCelToDateCalendar(params, "startDate"),
    },
    {
      field: "endDate",
      headerName: t("todos.endDateLabel"),
      minWidth: 120,
      flex: 1,
      renderCell: (params) => DatatableCelToDateCalendar(params, "startDate"),
    },
    {
      field: "priority",
      headerName: t("todos.priorityLabel"),
      minWidth: 120,
      flex: 1,
      renderCell: (params) => todoPriorityEnumToLabel(params.row.prority),
    },
    {
      field: "label",
      headerName: t("todos.label"),
      minWidth: 120,
      flex: 1,
      renderCell: (params) => (
        <Box display="flex">
          {params.row.labels.map((l, i) => (
            <div key={i}>{todoLabelEnumToLabel(l)}</div>
          ))}
        </Box>
      ),
    },
    {
      field: "completed",
      headerName: t("todos.completedLabel"),
      type: "boolean",
      flex: 1,
    },
  ];

  return (
    <>
      <CustomDatatable<Todo>
        rows={todos}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("todos.noTodos"),
        }}
      />
    </>
  );
};

export default TodoDatatable;
