import { Box } from "@mui/material";
import QuizSetupItem from "./QuizSetupItem";
import { IQuizSetupItem } from "../../models/Quiz";
import {
  ISaveSetupItemOptions,
  ISetupItemOptions,
} from "./QuizSetupInputAdder";

interface Props {
  item: IQuizSetupItem;
  handleAddSetupInput: (option: ISetupItemOptions) => void;
  handleDelete: (row: Omit<ISetupItemOptions, "direction">) => void;
  _handleSave: (options: ISaveSetupItemOptions) => void;
}

const QuestionManger = ({
  item,
  handleAddSetupInput,
  handleDelete,
  _handleSave,
}: Props) => {
  const displayAnswers = () =>
    item.answers.map((answer) => (
      <QuizSetupItem
        _handleSave={_handleSave}
        handleDelete={handleDelete}
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
        _handleSave={_handleSave}
        handleDelete={handleDelete}
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
