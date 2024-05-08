import { Quizanswer } from "../models/Quizanswer";

export const toQuizanswerExportable = (
  quizAnswers: Quizanswer[]
): Partial<Quizanswer & { genderLabel: string }>[] => {
  return quizAnswers.map((item) => {
    const { ...rest } = item;
    return { ...rest };
  });
};
