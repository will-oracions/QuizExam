import { Box } from "@mui/material";
import QuizSetupNavItem from "../../components/quiz/QuizSetupNavItem";
import { useOutletContext } from "react-router-dom";
import { IQuizSetupOutletContext } from "./QuizSetup";

const QuizSetupPreview = () => {
  const { quiz } = useOutletContext<IQuizSetupOutletContext>();

  const displayNavLink = () => (
    <QuizSetupNavItem
      leftLink={{
        label: "Questions setup",
        url: `/quiz-setup/${quiz.id}/questions`,
      }}
    />
  );

  return (
    <>
      <Box className="app-quiz-setup">
        <h3>Quiz Preview</h3>
        <Box mb={4}>{displayNavLink()}</Box>
      </Box>
    </>
  );
};

export default QuizSetupPreview;
