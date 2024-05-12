import React from "react";
import { Box, Button } from "@mui/material";

import QuestionManger from "../components/quiz/QuestionManger";
import "./QuizSetup.scss";
import QuizSetupSidebar from "../components/quiz/QuizSetupSidebar";
import { IQuizSetupItem, QuizSetupAnswer } from "../models/Quiz";
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
    if (options.type === "QUESTION") {
      const questionIndex = quizSetup.findIndex(
        (q) => q.question.id === options.targetId
      );

      if (questionIndex > -1) {
        const newQuizSetupItem: IQuizSetupItem = {
          question: {
            id: new Date().getTime(),
            questionText: "test",
            editing: true,
          },
          answers: [],
        };

        const middleIndex =
          options.direction === "BEFORE" ? questionIndex : questionIndex + 1;

        // console.log(questionIndex, middleIndex);

        const left = quizSetup.slice(0, middleIndex);
        const right = quizSetup.slice(middleIndex);

        const q = [...left, newQuizSetupItem, ...right];

        setQuizSetup(q);
      }
    } else if (options.type === "ANSWER" && options.questionId) {
      const questionIndex = quizSetup.findIndex(
        (q) => q.question.id === options.questionId
      );

      const answerIndex = quizSetup[questionIndex].answers.findIndex(
        (a) => a.id === options.targetId
      );

      if (answerIndex > -1) {
        const newAnswerSetupItem: QuizSetupAnswer = {
          id: new Date().getTime(),
          answerText: "answer test",
          editing: true,
        };

        const middleIndex =
          options.direction === "BEFORE" ? answerIndex : answerIndex + 1;

        // console.log(questionIndex, middleIndex);

        setQuizSetup(
          quizSetup.map((question, index) => {
            if (index === questionIndex) {
              const left = question.answers.slice(0, middleIndex);
              const right = question.answers.slice(middleIndex);

              const answers = [...left, newAnswerSetupItem, ...right];

              return {
                ...question,
                answers: answers,
              };
            }

            return question;
          })
        );
      }
    }
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
