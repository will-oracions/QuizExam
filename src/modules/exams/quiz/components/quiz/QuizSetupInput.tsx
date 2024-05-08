import { Box, TextField, Button } from "@mui/material";

const QuizSetupInput = () => {
  return (
    <>
      <Box className="app-quiz-question-input">
        <Box className="app-quiz-question-text-input">
          <TextField label="Add Answer" variant="outlined" fullWidth />
        </Box>
        <Box className="app-quiz-question-input-control">
          <Button variant="contained" size="small">
            Save
          </Button>

          <Button variant="contained" color="error" size="small">
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuizSetupInput;
