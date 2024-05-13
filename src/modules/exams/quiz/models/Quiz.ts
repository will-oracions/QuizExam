import { Quizanswer } from "../../quizAnswers/models/Quizanswer";
import { Quizquestion } from "../../quizQuestions/models/Quizquestion";

export interface Quiz {
  id: number;
  name: string;
  description: string;
  date: string;
  concepts: string[];
  status: QuizStatus;
  difficulty: QuizDifficulty;
}

export type QuizSetupQuestion = Quizquestion & { editing?: boolean };

export type QuizSetupAnswer = Quizanswer & { editing?: boolean };
export interface IQuizSetupItem {
  question: QuizSetupQuestion;
  answers: QuizSetupAnswer[];
}

export enum QuizFilterEnum {
  ALL = "1",
  // NOTHING_DONE = "2",
  // ALL_DONE = "3",
  // DONT_HAVE_TASK = "4",
}

export enum QuizLevel {
  L1 = "1",
  L2 = "2",
  L3 = "3",
}

export enum QuizStatus {
  SCHEDULED = "1",
  RUNNING = "2",
  CLOSE = "3",
}

export enum QuizDifficulty {
  LOW = "1",
  MEDIUM = "2",
  HARD = "3",
}
