import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

// export interface QuizanswerFilter {
//   main: QuizanswerFilterEnum | "";
//   level: QuizanswerLevel | "";
// }

interface Props {
  handleCreate: () => void;
  // quizAnswerFilter: QuizanswerFilter;
  // setQuizanswerFilter: (filter: QuizanswerFilter) => void;
}

const QuizanswerSidebar = ({
  /**
   * Handler to create a new Quizanswer
   */
  handleCreate,
}: /**
 * Filter to apply to the quizAnswers list data
 */
// quizAnswerFilter,
/**
 * Change Quizanswer filter
 */
// setQuizanswerFilter,
Props) => {
  const { t } = useTranslation();

  // const { closeSidebar } = useOutletContext<IOutletContext>();

  // React.useEffect(() => closeSidebar(), [quizAnswerFilter]);

  /**
   * Convert quizAnswer main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value quizAnswer enum
   * @returns template to render to quizAnswer filters list
   * with style and translation
   */
  // const getMainFilterLabel = (value: string) => {
  //   switch (value) {
  //     case String(QuizanswerFilterEnum.ALL):
  //       return (
  //         <>
  //           <People /> <span>{t("all")}</span>
  //         </>
  //       );
  //     // case String(QuizanswerFilterEnum.ALL_DONE):
  //     //   return (
  //     //     <>
  //     //       <EventAvailable /> <span>{t("allTaskDone")}</span>
  //     //     </>
  //     //   );
  //     // case String(QuizanswerFilterEnum.DONT_HAVE_TASK):
  //     //   return (
  //     //     <>
  //     //       <ErrorOutline /> {t("noTaskAssigned")}
  //     //     </>
  //     //   );

  //     // case String(QuizanswerFilterEnum.NOTHING_DONE):
  //     //   return (
  //     //     <>
  //     //       <Warning /> {t("NoTaskDone")}
  //     //     </>
  //     //   );
  //   }
  // };

  /**
   * Convert quizAnswer level filter to appropriate template
   * to appropriate template to render in the list
   * @param value
   * @returns template to render to quizAnswer level filters list
   * with style and translation
   */
  // const getGenderFilterLabel = (value: string) => {
  //   switch (value) {
  //     case String(QuizanswerLevel.L1):
  //       return (
  //         <>
  //           <Man /> L1
  //         </>
  //       );

  //     case String(QuizanswerLevel.L2):
  //       return (
  //         <>
  //           <Woman /> L2
  //         </>
  //       );

  //     case String(QuizanswerLevel.L3):
  //       return (
  //         <>
  //           <Woman /> L2
  //         </>
  //       );
  //   }
  // };

  /**
   * Display the list of Quizanswer filters list
   * @returns template to display the filter in the list
   * with style and translation.
   */
  // const displayMainFilters = () => {
  //   return Object.values(QuizanswerFilterEnum).map((value, i) => {
  //     return (
  //       <div
  //         onClick={() => setQuizanswerFilter({ ...quizAnswerFilter, main: value })}
  //         key={i}
  //         className={
  //           "sidebar-tasks-list-item" +
  //           (quizAnswerFilter.main === value ? " active" : "")
  //         }>
  //         <span>{getMainFilterLabel(value)}</span>
  //       </div>
  //     );
  //   });
  // };

  /**
   * Display quizAnswer level filters list
   * @returns Template to render quizAnswer level filters in the list
   * with style and translation
   */
  // const displayGenderFilters = () => {
  //   return Object.values(QuizanswerLevel).map((value, i) => {
  //     return (
  //       <div
  //         onClick={() =>
  //           setQuizanswerFilter({
  //             ...quizAnswerFilter,
  //             level: quizAnswerFilter.level === value ? "" : value,
  //           })
  //         }
  //         key={i}
  //         className={
  //           "sidebar-tasks-list-item" +
  //           (quizAnswerFilter.level === value ? " active" : "")
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
            {t("quizAnswers.createQuizAnswerBtnLabel")}
          </Button>
        </Box>
      </div>

      {/* <div className="sidebar-tasks-list">{displayMainFilters()}</div> */}

      {/* Lables Filter */}
      {/* <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("quizAnswers.difficultyLabel")}
        </div>
d<
        {displayGenderFilters()}
      </div> */}
    </div>
  );
};

export default QuizanswerSidebar;
