import React from "react";
import { Box, Button } from "@mui/material";

import QuestionManger from "../components/quiz/QuestionManger";
import "./QuizSetup.scss";
import QuizSetupSidebar from "../components/quiz/QuizSetupSidebar";
import { IQuizSetupItem } from "../models/Quiz";
import { IAddSetupItemOptions } from "../components/quiz/QuizSetupInputAdder";

const quizSetupData: IQuizSetupItem[] = [
  {
    question: {
      id: 1,
      questionText: "Quel est votre nom ?",
    },
    answers: [
      {
        id: 1,
        answerText: "Noe",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "Leo",
      },
      {
        id: 3,
        answerText: "Martine",
      },
    ],
  },
  {
    question: {
      id: 2,
      questionText: "Quel est la capitale du Cameroun ?",
    },
    answers: [
      {
        id: 1,
        answerText: "Yaoundé",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "Bafia",
      },
      {
        id: 3,
        answerText: "Maroua",
      },
    ],
  },
];
const QuizSetup = () => {
  const [quizSetup, setQuizSetup] =
    React.useState<IQuizSetupItem[]>(quizSetupData);

  const handleAddSetupInput = (options: IAddSetupItemOptions) => {
    console.log("options: ", options);
    const newQuizSetupItem: IQuizSetupItem = {
      question: {
        id: new Date().getTime(),
        questionText: "test",
        editing: true,
      },
      answers: [],
    };

    setQuizSetup([newQuizSetupItem, ...quizSetup]);
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizSetupSidebar />
      </div>
      <main id="app-main">
        <Box className="app-quiz-setup">
          <h3>Quiz Setup</h3>

          {quizSetup.map((item, i) => (
            <div className="app-quiz-setup-item" key={item.question.id}>
              <QuestionManger
                handleAddSetupInput={handleAddSetupInput}
                item={item}
              />
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
