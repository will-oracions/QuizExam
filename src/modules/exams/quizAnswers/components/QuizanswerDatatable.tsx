import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CustomDatatable from "../../../../components/CustomDatatable/CustomDatatable";
import { Quizanswer } from "../models/Quizanswer";

interface Props {
  quizAnswers: Quizanswer[];
  handleEdit: (row: Quizanswer) => void;
  handleDelete: (row: Quizanswer) => void;
}

const QuizanswerDatatable = ({
  quizAnswers,
  handleEdit,
  handleDelete,
}: Props) => {
  const { t } = useTranslation();

  const columns: GridColDef<Quizanswer>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "answerText",
      headerName: t("quizAnswers.quizAnswerForm.answerTextField.label"),
      minWidth: 120,
      flex: 1,
    },
    // {
    //   field: "description",
    //   headerName: t("quizAnswers.descriptionLabel"),
    //   flex: 1,
    //   minWidth: 120,
    // },
    // {
    //   field: "concepts",
    //   headerName: t("quizAnswers.conceptsLabel"),
    //   flex: 1,
    //   minWidth: 120,
    // },

    // {
    //   field: "tasksDone",
    //   headerName: t("quizAnswers.tasksDoneLabel"),
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
    //   headerName: t("quizAnswers.tasksAssignedLabel"),
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
    //   headerName: t("quizAnswers.genderLabel"),
    //   flex: 1,
    //   renderCell: (params) => <>{genderEnumToLabel(params.row.gender)}</>,
    // },
  ];

  return (
    <>
      <CustomDatatable<Quizanswer>
        rows={quizAnswers}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        localeText={{
          noRowsLabel: t("quizAnswers.noQuizAnswers"),
          // footerRowPerPage: t("quizAnswers.noTodos"),
        }}
      />
    </>
  );
};

export default QuizanswerDatatable;
