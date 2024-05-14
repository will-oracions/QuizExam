import { AddCircle } from "@mui/icons-material";
import { SetupInputType } from "./QuizSetupInput";

export type QuizInputAddDirection = "BEFORE" | "BELOW" | "NONE";

export interface ISetupItemOptions {
  type: SetupInputType;
  direction: QuizInputAddDirection;
  targetId: number;
  questionId?: number;
}

export interface ISaveSetupItemOptions {
  type: SetupInputType;
  targetId: number;
  content: string;
  questionId?: number;
}

export interface ISetupItemStateOptions {
  type: SetupInputType;
  targetId: number;
  editing?: boolean;
  isOpen?: boolean;
  questionId?: number;
}

interface Props {
  direction: QuizInputAddDirection;
  type: SetupInputType;
  itemId: number;
  questionId?: number;
  handleAddSetupInput: (option: ISetupItemOptions) => void;
}

const QuizSetupInputAdder = ({
  direction,
  handleAddSetupInput,
  type,
  itemId,
  questionId,
}: Props) => {
  const displayBtnTemplate = () => {
    const template = <AddCircle />;
    if (direction && direction === "BEFORE") {
      return (
        <>
          {template} <span className="adder-input-label">Add before</span>
        </>
      );
    } else if (direction && direction === "BELOW") {
      return (
        <>
          {template} <span className="adder-input-label">Add below</span>
        </>
      );
    } else {
      return (
        <>
          <div className="no-quiz-item-wrapper">
            <div className="no-item-controls">
              {template} <span className="adder-input-label">Add</span>
            </div>
            <div className="no-quiz-item">
              No {type === "QUESTION" ? "questions" : "answers"}
            </div>
          </div>
        </>
      );
    }
  };

  const getAdderWrapperClass = () => {
    if (direction === "BELOW") return " below";
    if (direction === "NONE") return " none";
    return "";
  };

  return (
    <>
      <div
        onClick={() =>
          handleAddSetupInput({ direction, type, targetId: itemId, questionId })
        }
        className={"app-quiz-input-adder" + getAdderWrapperClass()}>
        {displayBtnTemplate()}
      </div>
    </>
  );
};

export default QuizSetupInputAdder;
