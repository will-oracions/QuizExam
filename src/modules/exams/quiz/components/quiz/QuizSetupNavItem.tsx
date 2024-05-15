import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export interface IQuizSetupNavItemOptions {
  label: string;
  url: string;
}

interface Props {
  leftLink?: IQuizSetupNavItemOptions;
  rightLink?: IQuizSetupNavItemOptions;
}

const QuizSetupNavItem = ({ leftLink, rightLink }: Props) => {
  if (!leftLink && !rightLink)
    throw new Error(
      "QuizSetupNavItem required at least one link. reftLink or rightLink"
    );

  return (
    <>
      <div className="app-quiz-setup-nav">
        <div className="setup-nav-item">
          {leftLink && (
            <>
              <ChevronLeft />
              <Box component={NavLink} to={leftLink.url}>
                {leftLink.label}
              </Box>
            </>
          )}
        </div>

        <div className="setup-nav-item">
          {rightLink && (
            <>
              <Box component={NavLink} to={rightLink.url}>
                {rightLink.label}
              </Box>
              <ChevronRight />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizSetupNavItem;
