import { Edit, Delete, ArrowDropDownCircleRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import QuizSetupInput, { SetupInputType } from "./QuizSetupInput";

interface Props {
  // isOpen: boolean;
  // toggleOpen: () => void;
  editing?: boolean;
  setEditing: (editing: boolean) => void;
  cancelAddEdit: () => void;
  type: SetupInputType;
}
const QuizSetupItemHeader = ({
  editing,
  setEditing,
  cancelAddEdit,
  type,
}: // toggleOpen,
Props) => {
  const displayTemplate = () => {
    const text = `Question: Lorem ipsum dolor sit amet consectetur adipisicing elit...
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum,
    eum aut enim, animi saepe distinctio dolorum ullam vitae minus atque
    eius quas neque tenetur in dolorem? Rerum, quod saepe.`;

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
