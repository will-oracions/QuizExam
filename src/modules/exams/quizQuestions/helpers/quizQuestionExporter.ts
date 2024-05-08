import { Quizquestion } from "../models/Quizquestion";

export const toQuizquestionExportable = (
  quizQuestions: Quizquestion[]
): Partial<Quizquestion & { genderLabel: string }>[] => {
  return quizQuestions.map((item) => {
    const { ...rest } = item;
    return { ...rest };
  });
};
