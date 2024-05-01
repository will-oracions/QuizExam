import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Todo } from "../models/Todo";

interface Props {
  todos: Todo[];
  handleEdit: (row: Todo) => void;
  handleDelete: (row: Todo) => void;
}

const TodoDatatable = ({ todos, handleEdit, handleDelete }: Props) => {
  const columns: GridColDef<Todo>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "assignee",
      headerName: "Assigned to",
      width: 150,
      renderCell: (params) => {
        // console.log(params.row);
        return params.row.assignee?.name;
      },
    },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "description", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Dates", flex: 1 },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      renderCell: (params) => {
        return params.row.prority;
      },
    },
    {
      field: "label",
      headerName: "Label",
      flex: 1,
      renderCell: (params) => {
        return params.row.labels?.join(" | ");
      },
    },
    { field: "completed", headerName: "Completed", type: "boolean", flex: 1 },
  ];

  return (
    <>
      <CustomDatatable<Todo>
        rows={todos}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default TodoDatatable;
