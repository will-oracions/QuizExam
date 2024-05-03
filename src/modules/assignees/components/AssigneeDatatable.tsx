import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Assignee } from "../models/Assignee";
import { genderEnumToLabel } from "../helpers/EnumParsers";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  assignees: Assignee[];
  handleEdit: (row: Assignee) => void;
  handleDelete: (row: Assignee) => void;
}

const AssigneeDatatable = ({ assignees, handleEdit, handleDelete }: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Assignee>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "tasksDone",
      headerName: "Taks Done",
      width: 90,

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
      width: 90,
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
        localeText={{
          noRowsLabel: t("assignees.noTodos"),
          // footerRowPerPage: t("assignees.noTodos"),
        }}
      />
    </>
  );
};

export default AssigneeDatatable;
