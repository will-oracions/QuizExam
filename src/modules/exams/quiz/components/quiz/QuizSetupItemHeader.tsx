import { Edit, Delete, ArrowDropDownCircleRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const QuizSetupItemHeader = () => {
  return (
    <>
      <Box className="app-quiz-question-section-header">
        <Typography className="app-quiz-question-section-label">
          Question: Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Typography>
        <Box>
          <Edit color="primary" />
          <Delete color="error" />
          <ArrowDropDownCircleRounded htmlColor="white" />
        </Box>
      </Box>
    </>
  );
};

export default QuizSetupItemHeader;
