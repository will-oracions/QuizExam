import { Quizanswer } from "../../quizAnswers/models/Quizanswer";
import {
  IQuizSetupItem,
  Quiz,
  QuizQuestionResponse,
  QuizSetupAnswer,
  QuizSetupQuestion,
} from "../models/Quiz";

export const toQuizSetupItemList = (quiz: Quiz): IQuizSetupItem[] => {
  return quiz.questions.map(
    (question: QuizQuestionResponse): IQuizSetupItem => {
      const questionSetup: QuizSetupQuestion = {
        id: question.id,
        questionText: question.questionText,
        editing: false,
        isOpen: false,
      };

      return {
        question: questionSetup,
        answers: question.answers.map((answer: Quizanswer): QuizSetupAnswer => {
          return {
            id: answer.id,
            answerText: answer.answerText,
            editing: false,
            isCorrect: answer.isCorrect,
          };
        }),
      };
    }
  );
};
