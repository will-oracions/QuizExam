import { Box } from "@mui/material";
import React from "react";

import QuestionManger from "../../components/quiz/QuestionManger";
import QuizSetupInputAdder, {
  ISaveSetupItemOptions,
  ISetupItemOptions,
  ISetupItemStateOptions,
} from "../../components/quiz/QuizSetupInputAdder";
import { IQuizSetupItem, QuizSetupAnswer } from "../../models/Quiz";
import "./QuizSetup.scss";
import QuizSetupNavItem from "../../components/quiz/QuizSetupNavItem";
import { useOutletContext } from "react-router-dom";
import { IQuizSetupOutletContext } from "./QuizSetup";
import { toQuizSetupItemList } from "../../helpers/quizDataParser";

// const quizSetupData: IQuizSetupItem[] = [
//   {
//     question: {
//       id: 1,
//       questionText: "Quel est votre nom ?",
//       // isOpen: true,
//       // editing: true,
//     },
//     answers: [
//       {
//         id: 1,
//         answerText: "Noe",
//         isCorrect: true,
//       },
//       {
//         id: 2,
//         answerText: "Leo",
//       },
//       {
//         id: 3,
//         answerText: "Martine",
//       },
//     ],
//   },
//   {
//     question: {
//       id: 2,
//       questionText: "Quel est la capitale du Cameroun ?",
//     },
//     answers: [
//       {
//         id: 1,
//         answerText: "Yaoundé",
//         isCorrect: true,
//       },
//       {
//         id: 2,
//         answerText: "Bafia",
//       },
//       {
//         id: 3,
//         answerText: "Maroua",
//       },
//     ],
//   },
// ];

export interface IQuizLoadingState {
  loadingSave: boolean;
  loadingEdit: boolean;
  loadingDelete: boolean;
}

const QuizSetupQuestions = () => {
  const { quiz } = useOutletContext<IQuizSetupOutletContext>();
  const [quizSetup, setQuizSetup] = React.useState<IQuizSetupItem[]>(
    toQuizSetupItemList(quiz)
  );

  const [loadingState, setLoadingState] = React.useState<IQuizLoadingState>({
    loadingSave: false,
    loadingEdit: false,
    loadingDelete: false,
  });

  const handleAddSetupInput = (options: ISetupItemOptions) => {
    console.log("options: ", options);

    if (options.type === "QUESTION") {
      if (options.targetId === -1) {
        // Add the first Question
        setQuizSetup([
          {
            question: {
              id: new Date().getTime(),
              questionText: "",
              editing: true,
              isOpen: false,
            },
            answers: [],
          },
        ]);

        return;
      }

      const questionIndex = quizSetup.findIndex(
        (q) => q.question.id === options.targetId
      );

      if (questionIndex > -1) {
        const newQuizSetupItem: IQuizSetupItem = {
          question: {
            id: new Date().getTime(),
            questionText: "",
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
      if (options.targetId === -1) {
        setQuizSetup((prev) =>
          prev.map((item) => {
            if (item.question.id === options.questionId) {
              item.answers = [
                {
                  id: new Date().getTime(),
                  editing: true,
                  answerText: "",
                },
              ];
              return item;
            }

            return item;
          })
        );
      }

      const questionIndex = quizSetup.findIndex(
        (q) => q.question.id === options.questionId
      );

      const answerIndex = quizSetup[questionIndex].answers.findIndex(
        (a) => a.id === options.targetId
      );

      if (answerIndex > -1) {
        const newAnswerSetupItem: QuizSetupAnswer = {
          id: new Date().getTime(),
          answerText: "",
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

  const handleDelete = (options: Omit<ISetupItemOptions, "direction">) => {
    // console.log("Delete: ", options);

    if (options.type === "QUESTION") {
      setQuizSetup((prev) =>
        prev.filter((item) => item.question.id != options.targetId)
      );
    } else if (
      options.type === "ANSWER" &&
      options.questionId &&
      options.targetId
    ) {
      setQuizSetup((prev) =>
        prev.filter((item) => {
          if (item.question.id === options.questionId) {
            const answers = item.answers.filter(
              (answer) => answer.id !== options.targetId
            );
            item.answers = answers;
            return { ...item, answers };
          }

          return item;
        })
      );
    }
  };

  const handleSave = (options: ISaveSetupItemOptions) => {
    console.log(options);
    if (options.type === "QUESTION") {
      setQuizSetup((prev) =>
        prev.map((item) => {
          if (item.question.id === options.targetId) {
            return {
              ...item,
              question: {
                ...item.question,
                questionText: options.content,
                editing: false,
                isOpen: true,
              },
            };
          }

          return item;
        })
      );
    } else if (
      options.type === "ANSWER" &&
      options.questionId &&
      options.targetId
    ) {
      setQuizSetup((prev) =>
        prev.map((item) => {
          if (item.question.id === options.questionId) {
            item.answers = item.answers.map((answer) => {
              if (answer.id === options.targetId) {
                return {
                  ...answer,
                  answerText: options.content,
                  editing: false,
                };
              }
              return answer;
            });
          }

          return item;
        })
      );
    }
  };

  const handleSetupItemStateChange = (options: ISetupItemStateOptions) => {
    console.log("options: ", options);
    if (options.type === "QUESTION" && options.targetId) {
      setQuizSetup((prev) =>
        prev.map((item: IQuizSetupItem) => {
          if (item.question.id === options.targetId) {
            item.question.isOpen = options.isOpen;
            item.question.editing = options.editing;
            return item;
          }

          item.question.editing = false;

          return item;
        })
      );
    } else if (
      options.type === "ANSWER" &&
      options.questionId &&
      options.targetId
    ) {
      setQuizSetup((prev) =>
        prev.map((item) => {
          if (item.question.id === options.questionId) {
            item.answers = item.answers.map((answer) => {
              if (answer.id === options.targetId) {
                answer.editing = options.editing;
                return answer;
              }

              answer.editing = false;
              return answer;
            });

            return item;
          }

          return item;
        })
      );
    }
  };

  const displayNavLink = () => (
    <QuizSetupNavItem
      leftLink={{
        label: "Informations",
        url: `/quiz-setup/${quiz.id}/informations`,
      }}
      rightLink={{
        label: "Preview",
        url: `/quiz-setup/${quiz.id}/preview`,
      }}
    />
  );

  return (
    <>
      <Box className="app-quiz-setup">
        <h3>Quiz Setup Questions</h3>

        <Box mb={4}>{displayNavLink()}</Box>

        {quizSetup.length === 0 && (
          <QuizSetupInputAdder
            direction="NONE"
            handleAddSetupInput={handleAddSetupInput}
            type="QUESTION"
            itemId={-1}
          />
        )}

        <div>
          {quizSetup.map((item) => (
            <div className="app-quiz-setup-item" key={item.question.id}>
              <QuestionManger
                _handleSetupItemStateChange={handleSetupItemStateChange}
                _loadingState={loadingState}
                _setLoadingState={setLoadingState}
                _handleSave={handleSave}
                handleDelete={handleDelete}
                handleAddSetupInput={handleAddSetupInput}
                item={item}
              />
            </div>
          ))}
        </div>

        <Box mt={4}>{displayNavLink()}</Box>
      </Box>
    </>
  );
};

export default QuizSetupQuestions;
