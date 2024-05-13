import React from "react";
import { Box, TextField, Button } from "@mui/material";

export type SetupInputType = "QUESTION" | "ANSWER";

interface Props {
  defaultValue?: string;
  cancelAddEdit: () => void;
  type: SetupInputType;
  _handleSave: (textValue: string) => void;
}
const QuizSetupInput = ({
  defaultValue,
  cancelAddEdit,
  type,
  _handleSave,
}: Props) => {
  const [textValue, setTextValue] = React.useState<string>("");

  const handleCancel = (e: any) => {
    e.stopPropagation();
    cancelAddEdit();
  };

  const onSave = () => {
    _handleSave(textValue);
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
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              defaultValue={defaultValue}
            />
          </div>
        </Box>
        <Box className="app-quiz-question-input-control">
          <Button onClick={onSave} variant="contained" size="small">
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
