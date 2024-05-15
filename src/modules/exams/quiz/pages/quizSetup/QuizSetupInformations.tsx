import { useOutletContext } from "react-router-dom";
import { IQuizSetupOutletContext } from "./QuizSetup";
import { Box, Typography } from "@mui/material";

const QuizSetupInformations = () => {
  const { quiz } = useOutletContext<IQuizSetupOutletContext>();
  return (
    <>
      <Box className="app-quiz-setup">
        <h3>Quiz Informations</h3>

        <Box>
          <Typography>{quiz.name}</Typography>
          <Typography>{quiz.date}</Typography>
          <Typography>{quiz.concepts}</Typography>
          <Typography>{quiz.description}</Typography>
          <Typography>{quiz.difficulty}</Typography>
          <Typography>{quiz.status}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default QuizSetupInformations;
