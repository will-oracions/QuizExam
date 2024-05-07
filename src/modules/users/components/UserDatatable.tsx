import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { User } from "../models/User";

interface Props {
  users: User[];
  handleEdit: (row: User) => void;
  handleDelete: (row: User) => void;
}

const UserDatatable = ({ users, handleEdit, handleDelete }: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<User>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: t("users.userForm.nameField.label"),
      minWidth: 120,
      flex: 1,
    },
    {
      field: "email",
      headerName: t("users.nameLabel"),
      flex: 1,
      minWidth: 120,
    },
    {
      field: "phone",
      headerName: t("users.phoneLabel"),
      flex: 1,
      minWidth: 120,
    },
    // {
    //   field: "tasksDone",
    //   headerName: t("users.tasksDoneLabel"),
    //   width: 90,

    //   renderCell: (params) => (
    //     <Typography
    //       display="flex"
    //       justifyContent="center"
    //       alignItems="center"
    //       height="100%">
    //       {params.row.todos?.filter((t) => !!t.completed).length || 0}
    //     </Typography>
    //   ),
    // },
    // {
    //   field: "tasksAssigned",
    //   headerName: t("users.tasksAssignedLabel"),
    //   width: 90,
    //   renderCell: (params) => (
    //     <Typography
    //       display="flex"
    //       justifyContent="center"
    //       alignItems="center"
    //       height="100%">
    //       {params.row.todos?.length || 0}
    //     </Typography>
    //   ),
    // },
    // {
    //   field: "gender",
    //   headerName: t("users.genderLabel"),
    //   flex: 1,
    //   renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    // },
  ];

  return (
    <>
      <CustomDatatable<User>
        rows={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("users.noUsers"),
          // footerRowPerPage: t("users.noTodos"),
        }}
      />
    </>
  );
};

export default UserDatatable;
