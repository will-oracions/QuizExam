import React from "react";
import QuizSetupItemHeader from "./QuizSetupItemHeader";
import QuizSetupInputAdder, {
  ISaveSetupItemOptions,
  ISetupItemOptions,
} from "./QuizSetupInputAdder";
import { SetupInputType } from "./QuizSetupInput";
import { QuizSetupAnswer, QuizSetupQuestion } from "../../models/Quiz";

interface Props {
  children?: React.ReactNode;
  expandable?: boolean;
  type: SetupInputType;
  item: QuizSetupQuestion | QuizSetupAnswer;
  questionId?: number;
  handleAddSetupInput: (option: ISetupItemOptions) => void;
  handleDelete: (row: Omit<ISetupItemOptions, "direction">) => void;
  _handleSave: (options: ISaveSetupItemOptions) => void;
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
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(item.editing);

  const onSave = (textValue: string) => {
    console.log("Text value: ", textValue);
    const options: ISaveSetupItemOptions = {
      content: textValue,
      targetId: item.id,
      type,
      questionId,
    };

    _handleSave(options);
  };

  const handleEditing = (value: boolean) => {
    setIsOpen(false);
    setEditing(value);
  };

  const handleCancel = () => {
    setEditing(false);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
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
            _handleSave={onSave}
            questionId={questionId}
            type={type}
            item={item}
            // toggleOpen={() => setIsOpen(!isOpen)}
            cancelAddEdit={handleCancel}
            editing={editing}
            setEditing={handleEditing}
            handleDelete={handleDelete}
          />
        </div>

        {expandable && (
          <div
            className={
              "app-quiz-question-section-content" +
              (!editing && isOpen ? " opened" : "")
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
