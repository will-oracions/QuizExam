import React from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { IQuizLoadingState } from "../../pages/QuizSetup";

export type SetupInputType = "QUESTION" | "ANSWER";

interface Props {
  defaultValue?: string;
  cancelAddEdit: () => void;
  type: SetupInputType;
  _handleSave: (textValue: string) => void;
  _loadingState: IQuizLoadingState;
  _setLoadingState: (state: IQuizLoadingState) => void;
}
const QuizSetupInput = ({
  defaultValue,
  cancelAddEdit,
  type,
  _handleSave,
  _loadingState,
}: // _setLoadingState,
Props) => {
  const [textValue, setTextValue] = React.useState<string>(defaultValue || "");

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
              // defaultValue={defaultValue}
            />
          </div>
        </Box>
        <Box className="app-quiz-question-input-control">
          <Button
            disabled={_loadingState.loadingSave || _loadingState.loadingEdit}
            onClick={onSave}
            variant="contained"
            size="small">
            {_loadingState.loadingSave ||
              (_loadingState.loadingEdit && (
                <CircularProgress size="20px" color="inherit" />
              ))}
            &nbsp; Save
          </Button>

          <Button
            disabled={_loadingState.loadingDelete}
            onClick={handleCancel}
            variant="contained"
            color="error"
            size="small">
            {_loadingState.loadingDelete && (
              <CircularProgress size="20px" color="inherit" />
            )}
            &nbsp;Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuizSetupInput;
