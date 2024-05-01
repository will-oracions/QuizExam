import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Todo } from "../models/Todo";

interface Props {
  todos: Todo[];
  handleEdit: (row: Todo) => void;
  handleDelete: (row: Todo) => void;
}

const TodoDatatable = ({ todos, handleEdit, handleDelete }: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "assignee", headerName: "Assigned to", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "description", headerName: "description", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Dates", flex: 1 },
    { field: "priority", headerName: "Priority", flex: 1 },
    { field: "label", headerName: "Label", flex: 1 },
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
