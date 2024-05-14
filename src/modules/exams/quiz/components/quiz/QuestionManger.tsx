import { Box } from "@mui/material";
import QuizSetupItem from "./QuizSetupItem";
import { IQuizSetupItem } from "../../models/Quiz";
import QuizSetupInputAdder, {
  ISaveSetupItemOptions,
  ISetupItemOptions,
  ISetupItemStateOptions,
} from "./QuizSetupInputAdder";
import { IQuizLoadingState } from "../../pages/QuizSetup";

interface Props {
  item: IQuizSetupItem;
  handleAddSetupInput: (option: ISetupItemOptions) => void;
  handleDelete: (row: Omit<ISetupItemOptions, "direction">) => void;
  _handleSave: (options: ISaveSetupItemOptions) => void;
  _loadingState: IQuizLoadingState;
  _setLoadingState: (state: IQuizLoadingState) => void;
  _handleSetupItemStateChange: (options: ISetupItemStateOptions) => void;
}

const QuestionManger = ({
  item,
  handleAddSetupInput,
  handleDelete,
  _handleSave,
  _loadingState,
  _setLoadingState,
  _handleSetupItemStateChange,
}: Props) => {
  const displayAnswers = () =>
    item.answers.map((answer) => (
      <QuizSetupItem
        _handleSetupItemStateChange={_handleSetupItemStateChange}
        _loadingState={_loadingState}
        _setLoadingState={_setLoadingState}
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
        _handleSetupItemStateChange={_handleSetupItemStateChange}
        _loadingState={_loadingState}
        _setLoadingState={_setLoadingState}
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

          {item.answers.length === 0 && (
            <QuizSetupInputAdder
              direction="NONE"
              handleAddSetupInput={handleAddSetupInput}
              type="ANSWER"
              itemId={-1}
              questionId={item.question.id}
            />
          )}

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
