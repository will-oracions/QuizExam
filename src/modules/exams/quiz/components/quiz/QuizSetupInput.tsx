import { Box, TextField, Button } from "@mui/material";

export type SetupInputType = "QUESTION" | "ANSWER";

interface Props {
  defaultValue?: string;
  cancelAddEdit: () => void;
  type: SetupInputType;
}
const QuizSetupInput = ({ defaultValue, cancelAddEdit, type }: Props) => {
  const handleCancel = (e: any) => {
    e.stopPropagation();
    cancelAddEdit();
  };
  return (
    <>
      <Box className="app-quiz-question-input">
        <Box className="app-quiz-question-text-input">
          <div className="app-quiz-input">
            <TextField
              label={type === "QUESTION" ? "Add Question" : "Add Answer"}
              variant="outlined"
              fullWidth
              multiline
              minRows={1}
              maxRows={5}
              defaultValue={defaultValue}
            />
          </div>
        </Box>
        <Box className="app-quiz-question-input-control">
          <Button variant="contained" size="small">
            Save
          </Button>

          <Button
            onClick={handleCancel}
            variant="contained"
            color="error"
            size="small">
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuizSetupInput;
