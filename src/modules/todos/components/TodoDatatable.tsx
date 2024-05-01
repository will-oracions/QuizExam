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
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
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
