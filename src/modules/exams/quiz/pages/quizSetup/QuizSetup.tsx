import { Outlet, useParams } from "react-router-dom";
import QuizSetupSidebar from "../../components/quiz/QuizSetupSidebar";
import "./QuizSetup.scss";
import useQuiz from "../../hooks/useQuiz";
import { Alert, CircularProgress } from "@mui/material";
import { Quiz } from "../../models/Quiz";

export interface IQuizSetupOutletContext {
  quiz: Quiz;
}

const QuizSetup = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuiz(Number(id!));

  if (isLoading) return <CircularProgress />;

  if (error || !data) {
    console.error("No data. ", error);
    return <Alert color="error">{error?.message}</Alert>;
  }

  // console.log(data);

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizSetupSidebar quiz={data} />
      </div>

      <main id="app-main">
        <div>Quiz: {data.name}</div>
        <Outlet context={{ quiz: data }} />
      </main>
    </>
  );
};

export default QuizSetup;
