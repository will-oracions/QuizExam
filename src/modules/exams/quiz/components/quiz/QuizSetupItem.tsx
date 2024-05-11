import React from "react";
import QuizSetupItemHeader from "./QuizSetupItemHeader";
import QuizSetupInputAdder, {
  IAddSetupItemOptions,
} from "./QuizSetupInputAdder";
import { SetupInputType } from "./QuizSetupInput";
import { QuizSetupAnswer, QuizSetupQuestion } from "../../models/Quiz";

interface Props {
  children?: React.ReactNode;
  expandable?: boolean;
  type: SetupInputType;
  item: QuizSetupQuestion | QuizSetupAnswer;
  questionId?: number;
  handleAddSetupInput: (option: IAddSetupItemOptions) => void;
}

const QuizSetupItem = ({
  children,
  expandable,
  type,
  item,
  questionId,
  handleAddSetupInput,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(item.editing);

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
        handleAddSetupInput={handleAddSetupInput}
        direction="BEFORE"
      />

      <div className={"app-quiz-setup-section"}>
        <div onClick={toggleOpen}>
          <QuizSetupItemHeader
            type={type}
            item={item}
            // toggleOpen={() => setIsOpen(!isOpen)}
            cancelAddEdit={handleCancel}
            editing={editing}
            setEditing={handleEditing}
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
