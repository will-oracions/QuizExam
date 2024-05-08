/**
 * Convert gender enum to appropriate template
 * @param gender
 * @returns
 */
// export const genderEnumToLabel = (
//   gender: QuizquestionGenderEnum
// ): React.ReactNode => {
//   switch (gender) {
//     case QuizquestionGenderEnum.MAN:
//       return <GenderLabel labelToTranslate="men" />;
//     case QuizquestionGenderEnum.WOMEN:
//       return <GenderLabel labelToTranslate="women" />;
//   }
// };

// export const genderEnumToLabelText = (gender: QuizquestionGenderEnum): string => {
//   switch (gender) {
//     case QuizquestionGenderEnum.MAN:
//       return i18next.t("men");
//     case QuizquestionGenderEnum.WOMEN:
//       return i18next.t("women");
//   }
// };

// export interface IDifficultyEnumParser {
//   value: QuizquestionDifficulty;
//   label: string | React.ReactNode;
// }

// export const priorityEnumParserConfig: IDifficultyEnumParser[] = [
//   {
//     value: QuizquestionDifficulty.LOW,
//     label: (
//       <ProrityLabel color="burlywood" labelToTranslate="quizQuestions.difficulty.low" />
//     ),
//   },
//   {
//     value: QuizquestionDifficulty.MEDIUM,
//     label: (
//       <ProrityLabel
//         color="yellowgreen"
//         labelToTranslate="quizQuestions.difficulty.medium"
//       />
//     ),
//   },
//   {
//     value: QuizquestionDifficulty.HARD,
//     label: (
//       <ProrityLabel
//         color="orangered"
//         labelToTranslate="quizQuestions.difficulty.hard"
//       />
//     ),
//   },
// ];

// export const todoDifficultyEnumToLabel = (
//   priority: QuizquestionDifficulty
// ): string | React.ReactNode => {
//   const result = priorityEnumParserConfig.find(
//     (config) => config.value === priority
//   );

//   return result!.label;
// };
