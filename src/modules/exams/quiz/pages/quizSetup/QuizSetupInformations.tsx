import { useOutletContext } from "react-router-dom";
import { IQuizSetupOutletContext } from "./QuizSetup";
import { Box, Typography } from "@mui/material";
import QuizSetupNavItem from "../../components/quiz/QuizSetupNavItem";

const QuizSetupInformations = () => {
  const { quiz } = useOutletContext<IQuizSetupOutletContext>();

  const displayNavLink = () => (
    <QuizSetupNavItem
      rightLink={{
        label: "Questions setup",
        url: `/quiz-setup/${quiz.id}/questions`,
      }}
    />
  );

  return (
    <>
      <Box className="app-quiz-setup">
        <h3>Quiz Informations</h3>

        <Box mb={4}>{displayNavLink()}</Box>

        <Box>
          <Typography>{quiz.name}</Typography>
          <Typography>{quiz.date}</Typography>
          <Typography>{quiz.concepts}</Typography>
          <Typography>{quiz.description}</Typography>
          <Typography>{quiz.difficulty}</Typography>
          <Typography>{quiz.status}</Typography>
        </Box>

        <Box mt={4}>{displayNavLink()}</Box>
      </Box>
    </>
  );
};

export default QuizSetupInformations;
