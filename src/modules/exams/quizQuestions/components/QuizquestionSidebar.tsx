import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

// export interface QuizquestionFilter {
//   main: QuizquestionFilterEnum | "";
//   level: QuizquestionLevel | "";
// }

interface Props {
  handleCreate: () => void;
  // quizQuestionFilter: QuizquestionFilter;
  // setQuizquestionFilter: (filter: QuizquestionFilter) => void;
}

const QuizquestionSidebar = ({
  /**
   * Handler to create a new Quizquestion
   */
  handleCreate,
}: /**
 * Filter to apply to the quizQuestions list data
 */
// quizQuestionFilter,
/**
 * Change Quizquestion filter
 */
// setQuizquestionFilter,
Props) => {
  const { t } = useTranslation();

  // const { closeSidebar } = useOutletContext<IOutletContext>();

  // React.useEffect(() => closeSidebar(), [quizQuestionFilter]);

  /**
   * Convert quizQuestion main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value quizQuestion enum
   * @returns template to render to quizQuestion filters list
   * with style and translation
   */
  // const getMainFilterLabel = (value: string) => {
  //   switch (value) {
  //     case String(QuizquestionFilterEnum.ALL):
  //       return (
  //         <>
  //           <People /> <span>{t("all")}</span>
  //         </>
  //       );
  //     // case String(QuizquestionFilterEnum.ALL_DONE):
  //     //   return (
  //     //     <>
  //     //       <EventAvailable /> <span>{t("allTaskDone")}</span>
  //     //     </>
  //     //   );
  //     // case String(QuizquestionFilterEnum.DONT_HAVE_TASK):
  //     //   return (
  //     //     <>
  //     //       <ErrorOutline /> {t("noTaskAssigned")}
  //     //     </>
  //     //   );

  //     // case String(QuizquestionFilterEnum.NOTHING_DONE):
  //     //   return (
  //     //     <>
  //     //       <Warning /> {t("NoTaskDone")}
  //     //     </>
  //     //   );
  //   }
  // };

  /**
   * Convert quizQuestion level filter to appropriate template
   * to appropriate template to render in the list
   * @param value
   * @returns template to render to quizQuestion level filters list
   * with style and translation
   */
  // const getGenderFilterLabel = (value: string) => {
  //   switch (value) {
  //     case String(QuizquestionLevel.L1):
  //       return (
  //         <>
  //           <Man /> L1
  //         </>
  //       );

  //     case String(QuizquestionLevel.L2):
  //       return (
  //         <>
  //           <Woman /> L2
  //         </>
  //       );

  //     case String(QuizquestionLevel.L3):
  //       return (
  //         <>
  //           <Woman /> L2
  //         </>
  //       );
  //   }
  // };

  /**
   * Display the list of Quizquestion filters list
   * @returns template to display the filter in the list
   * with style and translation.
   */
  // const displayMainFilters = () => {
  //   return Object.values(QuizquestionFilterEnum).map((value, i) => {
  //     return (
  //       <div
  //         onClick={() => setQuizquestionFilter({ ...quizQuestionFilter, main: value })}
  //         key={i}
  //         className={
  //           "sidebar-tasks-list-item" +
  //           (quizQuestionFilter.main === value ? " active" : "")
  //         }>
  //         <span>{getMainFilterLabel(value)}</span>
  //       </div>
  //     );
  //   });
  // };

  /**
   * Display quizQuestion level filters list
   * @returns Template to render quizQuestion level filters in the list
   * with style and translation
   */
  // const displayGenderFilters = () => {
  //   return Object.values(QuizquestionLevel).map((value, i) => {
  //     return (
  //       <div
  //         onClick={() =>
  //           setQuizquestionFilter({
  //             ...quizQuestionFilter,
  //             level: quizQuestionFilter.level === value ? "" : value,
  //           })
  //         }
  //         key={i}
  //         className={
  //           "sidebar-tasks-list-item" +
  //           (quizQuestionFilter.level === value ? " active" : "")
  //         }>
  //         <span>{getGenderFilterLabel(value)}</span>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <div>
        <Box className="app-create-button">
          <Button
            onClick={handleCreate}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            {t("quizQuestions.createQuizQuestionBtnLabel")}
          </Button>
        </Box>
      </div>

      {/* <div className="sidebar-tasks-list">{displayMainFilters()}</div> */}

      {/* Lables Filter */}
      {/* <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("quizQuestions.difficultyLabel")}
        </div>
d<
        {displayGenderFilters()}
      </div> */}
    </div>
  );
};

export default QuizquestionSidebar;
