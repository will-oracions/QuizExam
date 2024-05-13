import { Edit, Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";
import QuizSetupInput, { SetupInputType } from "./QuizSetupInput";
import { Quizquestion } from "../../../quizQuestions/models/Quizquestion";
import { Quizanswer } from "../../../quizAnswers/models/Quizanswer";
import { ISetupItemOptions } from "./QuizSetupInputAdder";

interface Props {
  // isOpen: boolean;
  // toggleOpen: () => void;
  editing?: boolean;
  setEditing: (editing: boolean) => void;
  cancelAddEdit: () => void;
  handleDelete: (row: Omit<ISetupItemOptions, "direction">) => void;
  type: SetupInputType;
  item: Quizquestion | Quizanswer;
  questionId?: number;
  _handleSave: (textValue: string) => void;
}
const QuizSetupItemHeader = ({
  editing,
  setEditing,
  cancelAddEdit,
  handleDelete,
  type,
  item,
  questionId,
  _handleSave,
}: // toggleOpen,
Props) => {
  const displayTemplate = () => {
    let text;

    if (type === "QUESTION") text = (item as Quizquestion).questionText;
    if (type === "ANSWER") text = (item as Quizanswer).answerText;

    if (editing) {
      return (
        <QuizSetupInput
          _handleSave={_handleSave}
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

  const onDelete = (e: any) => {
    console.log("handle delete: ");
    e.stopPropagation();
    const options: Omit<ISetupItemOptions, "direction"> = {
      type,
      targetId: item.id,
      questionId,
    };

    handleDelete(options);
  };

  return (
    <>
      <div className="app-quiz-question-section-header">
        <div>
          <div className="app-quiz-controls">
            <div className="app-question-id-wrapper">
              {/* <ArrowDropDownCircleRounded
                className="arrow-icon "
                htmlColor="white"
              />
              <span className="app-question-id">
                {type === "QUESTION" ? "Question" : "Anwser"} N° 234
              </span> */}
              {displayTemplate()}
            </div>

            {!editing && (
              <div className="app-controls-btn">
                <Edit onClick={handleEdit} color="primary" />
                <Delete onClick={onDelete} color="error" />
              </div>
            )}
          </div>
          {/* <div>{displayTemplate()}</div> */}
        </div>
      </div>
    </>
  );
};

export default QuizSetupItemHeader;
