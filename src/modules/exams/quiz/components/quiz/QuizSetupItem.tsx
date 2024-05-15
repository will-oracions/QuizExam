import React from "react";
import QuizSetupItemHeader from "./QuizSetupItemHeader";
import QuizSetupInputAdder, {
  ISaveSetupItemOptions,
  ISetupItemOptions,
  ISetupItemStateOptions,
} from "./QuizSetupInputAdder";
import { SetupInputType } from "./QuizSetupInput";
import { QuizSetupAnswer, QuizSetupQuestion } from "../../models/Quiz";
import { IQuizLoadingState } from "../../pages/quizSetup/QuizSetupQuestions";

interface Props {
  children?: React.ReactNode;
  expandable?: boolean;
  type: SetupInputType;
  item: QuizSetupQuestion | QuizSetupAnswer;
  questionId?: number;
  handleAddSetupInput: (option: ISetupItemOptions) => void;
  handleDelete: (row: Omit<ISetupItemOptions, "direction">) => void;
  _handleSave: (options: ISaveSetupItemOptions) => void;
  _loadingState: IQuizLoadingState;
  _setLoadingState: (state: IQuizLoadingState) => void;
  _handleSetupItemStateChange: (options: ISetupItemStateOptions) => void;
}

const QuizSetupItem = ({
  children,
  expandable,
  type,
  item,
  questionId,
  handleAddSetupInput,
  handleDelete,
  _handleSave,
  _loadingState,
  _setLoadingState,
  _handleSetupItemStateChange,
}: Props) => {
  // const [isOpen, setIsOpen] = React.useState(item.editing);
  // const [editing, setEditing] = React.useState(item.editing);

  const onSave = (textValue: string) => {
    // console.log("Text value: ", textValue);
    const options: ISaveSetupItemOptions = {
      content: textValue,
      targetId: item.id,
      type,
      questionId,
    };

    _handleSave(options);
    // setEditing(false);
    // setIsOpen(false);
  };

  const handleEditing = (value: boolean) => {
    // setIsOpen(false);
    // setEditing(value);
    const options: ISetupItemStateOptions = {
      targetId: item.id,
      type,
      editing: value,
      isOpen: false,
      questionId,
    };

    _handleSetupItemStateChange(options);
  };

  const handleCancel = () => {
    // setEditing(false);
    // setIsOpen(false);

    const options: ISetupItemStateOptions = {
      targetId: item.id,
      type,
      editing: false,
      isOpen: false,
      questionId,
    };

    _handleSetupItemStateChange(options);
  };

  const toggleOpen = () => {
    // setIsOpen(!isOpen);
    if (item.editing) return;

    const options: ISetupItemStateOptions = {
      targetId: item.id,
      type,
      editing: false,
      isOpen: !(item as QuizSetupQuestion).isOpen,
      questionId,
    };

    _handleSetupItemStateChange(options);
  };

  return (
    <>
      <QuizSetupInputAdder
        questionId={questionId}
        itemId={item.id}
        type={type}
        direction="BEFORE"
        handleAddSetupInput={handleAddSetupInput}
      />

      <div className={"app-quiz-setup-section"}>
        <div onClick={toggleOpen}>
          <QuizSetupItemHeader
            _loadingState={_loadingState}
            _setLoadingState={_setLoadingState}
            _handleSave={onSave}
            questionId={questionId}
            type={type}
            item={item}
            // toggleOpen={() => setIsOpen(!isOpen)}
            cancelAddEdit={handleCancel}
            editing={item.editing}
            setEditing={handleEditing}
            handleDelete={handleDelete}
          />
        </div>

        {!item.editing && expandable && (
          <div
            className={
              "app-quiz-question-section-content" +
              (!item.editing && (item as QuizSetupQuestion).isOpen
                ? " opened"
                : "")
            }>
            {/* <Box>
              <Box className="app-quiz-question-text">
                {!editing && (
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate a earum doloribus vel hic quae nulla, doloremque
                    quos harum ipsam?
                  </Typography>
                )}

                {editing && <QuizSetupInput />}
              </Box>
            </Box> */}
            {children}
          </div>
        )}
      </div>
      <QuizSetupInputAdder
        questionId={questionId}
        itemId={item.id}
        type={type}
        handleAddSetupInput={handleAddSetupInput}
        direction="BELOW"
      />
    </>
  );
};

export default QuizSetupItem;
