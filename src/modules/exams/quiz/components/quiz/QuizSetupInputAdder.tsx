import { AddCircle } from "@mui/icons-material";

export type QuizInputAddDirection = "BEFORE" | "BELOW";

interface Props {
  direction?: QuizInputAddDirection;
}

const QuizSetupInputAdder = ({ direction }: Props) => {
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
        className={
          "app-quiz-input-adder" + (direction === "BELOW" ? " below" : "")
        }>
        {displayBtnTemplate()}
      </div>
    </>
  );
};

export default QuizSetupInputAdder;
