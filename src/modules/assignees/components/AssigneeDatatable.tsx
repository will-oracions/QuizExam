import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Assignee } from "../models/Assignee";

interface Props {
  assignees: Assignee[];
  handleEdit: (row: Assignee) => void;
  handleDelete: (row: Assignee) => void;
}

const AssigneeDatatable = ({ assignees, handleEdit, handleDelete }: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone" },
  ];

  return (
    <>
      <CustomDatatable<Assignee>
        rows={assignees}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default AssigneeDatatable;
