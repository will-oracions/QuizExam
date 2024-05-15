import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CustomDatatable from "../../../../components/CustomDatatable/CustomDatatable";
import { Quiz } from "../models/Quiz";
import { todoDifficultyEnumToLabel } from "../helpers/EnumParsers";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  quizs: Quiz[];
  handleEdit: (row: Quiz) => void;
  handleDelete: (row: Quiz) => void;
}

const QuizDatatable = ({ quizs, handleEdit, handleDelete }: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Quiz>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: t("quizs.quizForm.nameField.label"),
      minWidth: 120,
      flex: 1,
    },
    {
      field: "description",
      headerName: t("quizs.descriptionLabel"),
      flex: 1,
      minWidth: 120,
    },
    {
      field: "concepts",
      headerName: t("quizs.conceptsLabel"),
      flex: 1,
      minWidth: 120,
    },
    {
      field: "difficulty",
      headerName: t("quizs.difficultyLabel"),
      flex: 1,
      minWidth: 120,
      renderCell: (params) => todoDifficultyEnumToLabel(params.row.difficulty),
    },
    {
      field: "config",
      headerName: t("quizs.configLabel"),
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <>
          <Button
            component={NavLink}
            to={`/quiz-setup/${params.row.id}`}
            size="small">
            {t("quizs.configure")}
          </Button>
        </>
      ),
    },
    // {
    //   field: "tasksDone",
    //   headerName: t("quizs.tasksDoneLabel"),
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
    //   headerName: t("quizs.tasksAssignedLabel"),
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
    //   headerName: t("quizs.genderLabel"),
    //   flex: 1,
    //   renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    // },
  ];

  return (
    <>
      <CustomDatatable<Quiz>
        rows={quizs}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("quizs.noQuizs"),
          // footerRowPerPage: t("quizs.noTodos"),
        }}
      />
    </>
  );
};

export default QuizDatatable;
