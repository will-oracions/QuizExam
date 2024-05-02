import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Assignee } from "../models/Assignee";
import { genderEnumToLabel } from "../helpers/EnumParsers";
import { Typography } from "@mui/material";

interface Props {
  assignees: Assignee[];
  handleEdit: (row: Assignee) => void;
  handleDelete: (row: Assignee) => void;
}

const AssigneeDatatable = ({ assignees, handleEdit, handleDelete }: Props) => {
  const columns: GridColDef<Assignee>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "tasksDone",
      headerName: "Taks Done",
      flex: 1,

      renderCell: (params) => (
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%">
          {params.row.todos?.filter((t) => !!t.completed).length || 0}
        </Typography>
      ),
    },
    {
      field: "tasksAssigned",
      headerName: "Taks Assigned",
      flex: 1,
      renderCell: (params) => (
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%">
          {params.row.todos?.length || 0}
        </Typography>
      ),
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    },
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
