import { People } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../../../../components/Layout";
import { QuizFilterEnum, QuizLevel } from "../models/Quiz";

export interface QuizFilter {
  main: QuizFilterEnum | "";
  level: QuizLevel | "";
}

interface Props {
  handleCreate: () => void;
  quizFilter: QuizFilter;
  setQuizFilter: (filter: QuizFilter) => void;
}

const QuizSidebar = ({
  /**
   * Handler to create a new Quiz
   */
  handleCreate,
  /**
   * Filter to apply to the quizs list data
   */
  quizFilter,
  /**
   * Change Quiz filter
   */
  setQuizFilter,
}: Props) => {
  const { t } = useTranslation();

  const { closeSidebar } = useOutletContext<IOutletContext>();

  React.useEffect(() => closeSidebar(), [quizFilter]);

  /**
   * Convert quiz main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value quiz enum
   * @returns template to render to quiz filters list
   * with style and translation
   */
  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(QuizFilterEnum.ALL):
        return (
          <>
            <People /> <span>{t("all")}</span>
          </>
        );
      // case String(QuizFilterEnum.ALL_DONE):
      //   return (
      //     <>
      //       <EventAvailable /> <span>{t("allTaskDone")}</span>
      //     </>
      //   );
      // case String(QuizFilterEnum.DONT_HAVE_TASK):
      //   return (
      //     <>
      //       <ErrorOutline /> {t("noTaskAssigned")}
      //     </>
      //   );

      // case String(QuizFilterEnum.NOTHING_DONE):
      //   return (
      //     <>
      //       <Warning /> {t("NoTaskDone")}
      //     </>
      //   );
    }
  };

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
    return Object.values(QuizFilterEnum).map((value, i) => {
      return (
        <div
          onClick={() => setQuizFilter({ ...quizFilter, main: value })}
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (quizFilter.main === value ? " active" : "")
          }>
          <span>{getMainFilterLabel(value)}</span>
        </div>
      );
    });
  };

  /**
   * Display quiz level filters list
   * @returns Template to render quiz level filters in the list
   * with style and translation
   */
  const displayGenderFilters = () => {
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

    return (
      <>
        <div className={"sidebar-tasks-list-item"}>
          <span>Quiz introduction</span>
        </div>
        <div className={"sidebar-tasks-list-item"}>
          <span>Setup Questions</span>
        </div>
      </>
    );
  };

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
            {t("quizs.createQuizBtnLabel")}
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">{displayMainFilters()}</div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("quizs.difficultyLabel")}
        </div>

        {displayGenderFilters()}
      </div>
    </div>
  );
};

export default QuizSidebar;
