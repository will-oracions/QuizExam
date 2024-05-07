import ProrityLabel from "../../../todos/components/ProrityLabel";
import { QuizDifficulty } from "../models/Quiz";
/**
 * Convert gender enum to appropriate template
 * @param gender
 * @returns
 */
// export const genderEnumToLabel = (
//   gender: QuizGenderEnum
// ): React.ReactNode => {
//   switch (gender) {
//     case QuizGenderEnum.MAN:
//       return <GenderLabel labelToTranslate="men" />;
//     case QuizGenderEnum.WOMEN:
//       return <GenderLabel labelToTranslate="women" />;
//   }
// };

// export const genderEnumToLabelText = (gender: QuizGenderEnum): string => {
//   switch (gender) {
//     case QuizGenderEnum.MAN:
//       return i18next.t("men");
//     case QuizGenderEnum.WOMEN:
//       return i18next.t("women");
//   }
// };

export interface IDifficultyEnumParser {
  value: QuizDifficulty;
  label: string | React.ReactNode;
}

export const priorityEnumParserConfig: IDifficultyEnumParser[] = [
  {
    value: QuizDifficulty.LOW,
    label: (
      <ProrityLabel color="burlywood" labelToTranslate="quizs.difficulty.low" />
    ),
  },
  {
    value: QuizDifficulty.MEDIUM,
    label: (
      <ProrityLabel
        color="yellowgreen"
        labelToTranslate="quizs.difficulty.medium"
      />
    ),
  },
  {
    value: QuizDifficulty.HARD,
    label: (
      <ProrityLabel
        color="orangered"
        labelToTranslate="quizs.difficulty.hard"
      />
    ),
  },
];

export const todoDifficultyEnumToLabel = (
  priority: QuizDifficulty
): string | React.ReactNode => {
  const result = priorityEnumParserConfig.find(
    (config) => config.value === priority
  );

  return result!.label;
};
