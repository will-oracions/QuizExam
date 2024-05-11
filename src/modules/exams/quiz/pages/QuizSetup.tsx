import { Box } from "@mui/material";

import QuestionManger from "../components/quiz/QuestionManger";
import "./QuizSetup.scss";

const QuizSetup = () => {
  return (
    <>
      <div id="app-sidebar" className="mobile">
        Configure
      </div>
      <main id="app-main">
        <Box className="app-quiz-setup">
          <h3>Quiz Setup</h3>

          {[1, 2, 3, 4].map((_, i) => (
            <Box key={i} mb={10}>
              <QuestionManger />
            </Box>
          ))}
        </Box>
      </main>
    </>
  );
};

export default QuizSetup;
