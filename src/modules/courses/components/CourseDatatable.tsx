import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Course } from "../models/Course";

interface Props {
  courses: Course[];
  handleEdit: (row: Course) => void;
  handleDelete: (row: Course) => void;
}

const CourseDatatable = ({ courses, handleEdit, handleDelete }: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Course>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: t("courses.courseForm.nameField.label"),
      minWidth: 120,
      flex: 1,
    },
    {
      field: "description",
      headerName: t("courses.descriptionLabel"),
      flex: 1,
      minWidth: 120,
    },
    {
      field: "teacher",
      headerName: t("courses.teacherLabel"),
      flex: 1,
      minWidth: 120,
    },
    // {
    //   field: "tasksDone",
    //   headerName: t("courses.tasksDoneLabel"),
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
    //   headerName: t("courses.tasksAssignedLabel"),
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
    //   headerName: t("courses.genderLabel"),
    //   flex: 1,
    //   renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    // },
  ];

  return (
    <>
      <CustomDatatable<Course>
        rows={courses}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("courses.noCourses"),
          // footerRowPerPage: t("courses.noTodos"),
        }}
      />
    </>
  );
};

export default CourseDatatable;
