import { AddCircle } from "@mui/icons-material";
import { SetupInputType } from "./QuizSetupInput";

export type QuizInputAddDirection = "BEFORE" | "BELOW";

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
    }

    return (
      <>
        {template} <span className="adder-input-label">Add below</span>
      </>
    );
  };

  return (
    <>
      <div
        onClick={() =>
          handleAddSetupInput({ direction, type, targetId: itemId, questionId })
        }
        className={
          "app-quiz-input-adder" + (direction === "BELOW" ? " below" : "")
        }>
        {displayBtnTemplate()}
      </div>
    </>
  );
};

export default QuizSetupInputAdder;
