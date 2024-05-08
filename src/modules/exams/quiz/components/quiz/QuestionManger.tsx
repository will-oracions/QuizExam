import { Box } from "@mui/material";
import QuizSetupItem from "./QuizSetupItem";

const QuestionManger = () => {
  return (
    <QuizSetupItem>
      <Box className="app-quiz-answers-box">
        <Box className="app-quiz-answers-box-title">Réponses à la question</Box>
        <Box>
          <QuizSetupItem />
          <QuizSetupItem />
          <QuizSetupItem />
        </Box>
      </Box>
    </QuizSetupItem>
  );
};

export default QuestionManger;
