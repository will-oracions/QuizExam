import { Quiz } from "../models/Quiz";

export const toQuizExportable = (
  quizs: Quiz[]
): Partial<Quiz & { genderLabel: string }>[] => {
  return quizs.map((item) => {
    const { ...rest } = item;
    return { ...rest };
  });
};
