import { Box, Button } from "@mui/material";

import QuestionManger from "../components/quiz/QuestionManger";
import "./QuizSetup.scss";
import QuizSetupSidebar from "../components/quiz/QuizSetupSidebar";

const QuizSetup = () => {
  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizSetupSidebar />
      </div>
      <main id="app-main">
        <Box className="app-quiz-setup">
          <h3>Quiz Setup</h3>

          {[1, 2].map((_, i) => (
            <div className="app-quiz-setup-item" key={i}>
              <QuestionManger />
            </div>
          ))}

          <div>
            <div>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </div>
          </div>
        </Box>
      </main>
    </>
  );
};

export default QuizSetup;
