import { Box } from "@mui/material";
import QuizSetupItem from "./QuizSetupItem";
import { IQuizSetupItem } from "../../models/Quiz";
import { IAddSetupItemOptions } from "./QuizSetupInputAdder";

interface Props {
  item: IQuizSetupItem;
  handleAddSetupInput: (option: IAddSetupItemOptions) => void;
}

const QuestionManger = ({ item, handleAddSetupInput }: Props) => {
  const displayAnswers = () =>
    item.answers.map((answer) => (
      <QuizSetupItem
        questionId={item.question.id}
        handleAddSetupInput={handleAddSetupInput}
        key={answer.id}
        type="ANSWER"
        item={answer}
      />
    ));
  return (
    <>
      <QuizSetupItem
        handleAddSetupInput={handleAddSetupInput}
        item={item.question}
        type="QUESTION"
        expandable={true}>
        <Box className="app-quiz-answers-box">
          <Box className="app-quiz-answers-box-title">
            Réponses à la question
          </Box>
          <Box>
            {displayAnswers()}
            {/* <QuizSetupItem type="ANSWER" />
            <QuizSetupItem type="ANSWER" /> */}
          </Box>
        </Box>
      </QuizSetupItem>
    </>
  );
};

export default QuestionManger;
