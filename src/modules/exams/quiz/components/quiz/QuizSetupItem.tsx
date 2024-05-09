import { Box, Typography } from "@mui/material";
import QuizSetupInput from "./QuizSetupInput";
import QuizSetupItemHeader from "./QuizSetupItemHeader";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const QuizSetupItem = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Box className="app-quiz-setup-section">
        <Box onClick={() => setIsOpen(!isOpen)}>
          <QuizSetupItemHeader />
        </Box>

        {isOpen && (
          <Box className="app-quiz-question-section-content">
            <Box>
              <Box className="app-quiz-question-text">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate a earum doloribus vel hic quae nulla, doloremque
                  quos harum ipsam?
                </Typography>

                <QuizSetupInput />
              </Box>
            </Box>
            {children}
          </Box>
        )}
      </Box>
    </>
  );
};

export default QuizSetupItem;
