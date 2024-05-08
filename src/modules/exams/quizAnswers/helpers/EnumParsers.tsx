/**
 * Convert gender enum to appropriate template
 * @param gender
 * @returns
 */
// export const genderEnumToLabel = (
//   gender: QuizanswerGenderEnum
// ): React.ReactNode => {
//   switch (gender) {
//     case QuizanswerGenderEnum.MAN:
//       return <GenderLabel labelToTranslate="men" />;
//     case QuizanswerGenderEnum.WOMEN:
//       return <GenderLabel labelToTranslate="women" />;
//   }
// };

// export const genderEnumToLabelText = (gender: QuizanswerGenderEnum): string => {
//   switch (gender) {
//     case QuizanswerGenderEnum.MAN:
//       return i18next.t("men");
//     case QuizanswerGenderEnum.WOMEN:
//       return i18next.t("women");
//   }
// };

// export interface IDifficultyEnumParser {
//   value: QuizanswerDifficulty;
//   label: string | React.ReactNode;
// }

// export const priorityEnumParserConfig: IDifficultyEnumParser[] = [
//   {
//     value: QuizanswerDifficulty.LOW,
//     label: (
//       <ProrityLabel color="burlywood" labelToTranslate="quizAnswers.difficulty.low" />
//     ),
//   },
//   {
//     value: QuizanswerDifficulty.MEDIUM,
//     label: (
//       <ProrityLabel
//         color="yellowgreen"
//         labelToTranslate="quizAnswers.difficulty.medium"
//       />
//     ),
//   },
//   {
//     value: QuizanswerDifficulty.HARD,
//     label: (
//       <ProrityLabel
//         color="orangered"
//         labelToTranslate="quizAnswers.difficulty.hard"
//       />
//     ),
//   },
// ];

// export const todoDifficultyEnumToLabel = (
//   priority: QuizanswerDifficulty
// ): string | React.ReactNode => {
//   const result = priorityEnumParserConfig.find(
//     (config) => config.value === priority
//   );

//   return result!.label;
// };
