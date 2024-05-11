import { Box } from "@mui/material";
import QuizSetupItem from "./QuizSetupItem";

const QuestionManger = () => {
  return (
    <>
      <QuizSetupItem type="QUESTION" expandable={true}>
        <Box className="app-quiz-answers-box">
          <Box className="app-quiz-answers-box-title">
            Réponses à la question
          </Box>
          <Box>
            <QuizSetupItem type="ANSWER" />
            <QuizSetupItem type="ANSWER" />
            <QuizSetupItem type="ANSWER" />
          </Box>
        </Box>
      </QuizSetupItem>
    </>
  );
};

export default QuestionManger;
