import { InterestsRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Quiz } from "../../models/Quiz";

const quizSidebarLinks = [
  {
    icon: <InterestsRounded />,
    label: "Information",
    getLink: (quiz: Quiz) => `/quiz-setup/${quiz.id}/informations`,
  },

  {
    icon: <InterestsRounded />,
    label: "Questions",
    getLink: (quiz: Quiz) => `/quiz-setup/${quiz.id}/questions`,
  },

  {
    icon: <InterestsRounded />,
    label: "Preview",
    getLink: (quiz: Quiz) => `/quiz-setup/${quiz.id}/preview`,
  },
];

interface Props {
  // handleCreate: () => void;
  // quizFilter: QuizFilter;
  // setQuizFilter: (filter: QuizFilter) => void;
  quiz: Quiz;
}

const QuizSetupSidebar = ({ quiz }: Props) =>
  /**
   * Handler to create a new Quiz
   */
  // handleCreate,
  /**
   * Filter to apply to the quizs list data
   */
  // quizFilter,
  /**
   * Change Quiz filter
   */
  // setQuizFilter,
  {
    // const { t } = useTranslation();

    // const { closeSidebar } = useOutletContext<IOutletContext>();

    // React.useEffect(() => closeSidebar(), [quizFilter]);

    /**
     * Convert quiz main filter enum to appropriate template
     * to appropriate template to render in the list
     * @param value quiz enum
     * @returns template to render to quiz filters list
     * with style and translation
     */
    // const getMainFilterLabel = (value: string) => {
    //   switch (value) {
    //     case String(QuizFilterEnum.ALL):
    //       return (
    //         <>
    //           <People /> <span>{t("all")}</span>
    //         </>
    //       );
    //     // case String(QuizFilterEnum.ALL_DONE):
    //     //   return (
    //     //     <>
    //     //       <EventAvailable /> <span>{t("allTaskDone")}</span>
    //     //     </>
    //     //   );
    //     // case String(QuizFilterEnum.DONT_HAVE_TASK):
    //     //   return (
    //     //     <>
    //     //       <ErrorOutline /> {t("noTaskAssigned")}
    //     //     </>
    //     //   );

    //     // case String(QuizFilterEnum.NOTHING_DONE):
    //     //   return (
    //     //     <>
    //     //       <Warning /> {t("NoTaskDone")}
    //     //     </>
    //     //   );
    //   }
    // };

    /**
     * Convert quiz level filter to appropriate template
     * to appropriate template to render in the list
     * @param value
     * @returns template to render to quiz level filters list
     * with style and translation
     */
    // const getGenderFilterLabel = (value: string) => {
    //   switch (value) {
    //     case String(QuizLevel.L1):
    //       return (
    //         <>
    //           <Man /> L1
    //         </>
    //       );

    //     case String(QuizLevel.L2):
    //       return (
    //         <>
    //           <Woman /> L2
    //         </>
    //       );

    //     case String(QuizLevel.L3):
    //       return (
    //         <>
    //           <Woman /> L2
    //         </>
    //       );
    //   }
    // };

    /**
     * Display the list of Quiz filters list
     * @returns template to display the filter in the list
     * with style and translation.
     */
    const displayMainFilters = () => {
      return quizSidebarLinks.map((item, i) => {
        return (
          <Box key={i} component={NavLink} to={item.getLink(quiz)}>
            <Box className={"sidebar-tasks-list-item"}>
              <span>
                {item.icon} {item.label}
              </span>
            </Box>
          </Box>
        );
      });
    };

    /**
     * Display quiz level filters list
     * @returns Template to render quiz level filters in the list
     * with style and translation
     */
    // const displayGenderFilters = () => {
    // return Object.values(QuizLevel).map((value, i) => {
    //   return (
    //     <div
    //       onClick={() =>
    //         setQuizFilter({
    //           ...quizFilter,
    //           level: quizFilter.level === value ? "" : value,
    //         })
    //       }
    //       key={i}
    //       className={
    //         "sidebar-tasks-list-item" +
    //         (quizFilter.level === value ? " active" : "")
    //       }>
    //       <span>{getGenderFilterLabel(value)}</span>
    //     </div>
    //   );
    // });

    //   return (
    //     <>
    //       <div className={"sidebar-tasks-list-item"}>
    //         <span>Quiz introduction</span>
    //       </div>
    //       <div className={"sidebar-tasks-list-item"}>
    //         <span>Setup Questions</span>
    //       </div>
    //     </>
    //   );
    // };

    return (
      <div>
        {/* <div>
        <Box className="app-create-button">
          <Button
            onClick={handleCreate}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            {t("quizs.createQuizBtnLabel")}
          </Button>
        </Box>
      </div> */}

        {/* <Box mt={5}></Box> */}
        <div className="sidebar-tasks-list-label">Quiz Configuration</div>
        <div className="sidebar-tasks-list">{displayMainFilters()}</div>

        {/* Lables Filter */}
        {/* <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("quizs.difficultyLabel")}
        </div>

        {displayGenderFilters()}
      </div> */}
      </div>
    );
  };

export default QuizSetupSidebar;
