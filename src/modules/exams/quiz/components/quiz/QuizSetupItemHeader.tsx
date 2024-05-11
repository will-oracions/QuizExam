import { Edit, Delete, ArrowDropDownCircleRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import QuizSetupInput, { SetupInputType } from "./QuizSetupInput";
import { Quizquestion } from "../../../quizQuestions/models/Quizquestion";
import { Quizanswer } from "../../../quizAnswers/models/Quizanswer";

interface Props {
  // isOpen: boolean;
  // toggleOpen: () => void;
  editing?: boolean;
  setEditing: (editing: boolean) => void;
  cancelAddEdit: () => void;
  type: SetupInputType;
  item: Quizquestion | Quizanswer;
}
const QuizSetupItemHeader = ({
  editing,
  setEditing,
  cancelAddEdit,
  type,
  item,
}: // toggleOpen,
Props) => {
  const displayTemplate = () => {
    let text;

    if (type === "QUESTION") text = (item as Quizquestion).questionText;
    if (type === "ANSWER") text = (item as Quizanswer).answerText;

    if (editing) {
      return (
        <QuizSetupInput
          type={type}
          cancelAddEdit={cancelAddEdit}
          defaultValue={text}
        />
      );
    } else {
      return (
        <Typography className="app-quiz-question-section-label">
          {text}
        </Typography>
      );
    }
  };

  const handleEdit = (e: any) => {
    e.stopPropagation();
    setEditing(!editing);
  };

  return (
    <>
      <div className="app-quiz-question-section-header">
        <div>
          <div className="app-quiz-controls">
            <div className="app-question-id-wrapper">
              <ArrowDropDownCircleRounded
                className="arrow-icon "
                htmlColor="white"
              />
              <span className="app-question-id">
                {type === "QUESTION" ? "Question" : "Anwser"} N° 234
              </span>
            </div>

            {!editing && (
              <div className="app-controls-btn">
                <Edit onClick={handleEdit} color="primary" />
                <Delete color="error" />
              </div>
            )}
          </div>
          <div>{displayTemplate()}</div>
        </div>
      </div>
    </>
  );
};

export default QuizSetupItemHeader;
