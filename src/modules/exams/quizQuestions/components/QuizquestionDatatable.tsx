import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CustomDatatable from "../../../../components/CustomDatatable/CustomDatatable";
import { Quizquestion } from "../models/Quizquestion";

interface Props {
  quizQuestions: Quizquestion[];
  handleEdit: (row: Quizquestion) => void;
  handleDelete: (row: Quizquestion) => void;
}

const QuizquestionDatatable = ({
  quizQuestions,
  handleEdit,
  handleDelete,
}: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Quizquestion>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "questionText",
      headerName: t("quizQuestions.quizQuestionForm.questionTextField.label"),
      minWidth: 120,
      flex: 1,
    },
    // {
    //   field: "description",
    //   headerName: t("quizQuestions.descriptionLabel"),
    //   flex: 1,
    //   minWidth: 120,
    // },
    // {
    //   field: "concepts",
    //   headerName: t("quizQuestions.conceptsLabel"),
    //   flex: 1,
    //   minWidth: 120,
    // },

    // {
    //   field: "tasksDone",
    //   headerName: t("quizQuestions.tasksDoneLabel"),
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
    //   headerName: t("quizQuestions.tasksAssignedLabel"),
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
    //   headerName: t("quizQuestions.genderLabel"),
    //   flex: 1,
    //   renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    // },
  ];

  return (
    <>
      <CustomDatatable<Quizquestion>
        rows={quizQuestions}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("quizQuestions.noQuizQuestions"),
          // footerRowPerPage: t("quizQuestions.noTodos"),
        }}
      />
    </>
  );
};

export default QuizquestionDatatable;
