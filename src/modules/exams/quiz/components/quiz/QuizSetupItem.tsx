import React from "react";
import QuizSetupItemHeader from "./QuizSetupItemHeader";

interface Props {
  children?: React.ReactNode;
  expandable?: boolean;
}

const QuizSetupItem = ({ children, expandable }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const handleEditing = (value: boolean) => {
    setIsOpen(false);
    setEditing(value);
  };

  const handleCancel = () => {
    setEditing(false);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={"app-quiz-setup-section"}>
        <div onClick={toggleOpen}>
          <QuizSetupItemHeader
            // toggleOpen={() => setIsOpen(!isOpen)}
            cancelAddEdit={handleCancel}
            editing={editing}
            setEditing={handleEditing}
          />
        </div>

        {expandable && (
          <div
            className={
              "app-quiz-question-section-content" +
              (!editing && isOpen ? " opened" : "")
            }>
            {/* <Box>
              <Box className="app-quiz-question-text">
                {!editing && (
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate a earum doloribus vel hic quae nulla, doloremque
                    quos harum ipsam?
                  </Typography>
                )}

                {editing && <QuizSetupInput />}
              </Box>
            </Box> */}
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default QuizSetupItem;
