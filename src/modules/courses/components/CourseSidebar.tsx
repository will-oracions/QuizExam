import { Man, People, Woman } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../../../components/Layout";
import { CourseFilterEnum, CourseLevel } from "../models/Course";

export interface CourseFilter {
  main: CourseFilterEnum | "";
  level: CourseLevel | "";
}

interface Props {
  handleCreate: () => void;
  courseFilter: CourseFilter;
  setCourseFilter: (filter: CourseFilter) => void;
}

const CourseSidebar = ({
  /**
   * Handler to create a new Course
   */
  handleCreate,
  /**
   * Filter to apply to the courses list data
   */
  courseFilter,
  /**
   * Change Course filter
   */
  setCourseFilter,
}: Props) => {
  const { t } = useTranslation();

  const { closeSidebar } = useOutletContext<IOutletContext>();

  React.useEffect(() => closeSidebar(), [courseFilter]);

  /**
   * Convert course main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value course enum
   * @returns template to render to course filters list
   * with style and translation
   */
  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(CourseFilterEnum.ALL):
        return (
          <>
            <People /> <span>{t("all")}</span>
          </>
        );
      // case String(CourseFilterEnum.ALL_DONE):
      //   return (
      //     <>
      //       <EventAvailable /> <span>{t("allTaskDone")}</span>
      //     </>
      //   );
      // case String(CourseFilterEnum.DONT_HAVE_TASK):
      //   return (
      //     <>
      //       <ErrorOutline /> {t("noTaskAssigned")}
      //     </>
      //   );

      // case String(CourseFilterEnum.NOTHING_DONE):
      //   return (
      //     <>
      //       <Warning /> {t("NoTaskDone")}
      //     </>
      //   );
    }
  };

  /**
   * Convert course level filter to appropriate template
   * to appropriate template to render in the list
   * @param value
   * @returns template to render to course level filters list
   * with style and translation
   */
  const getGenderFilterLabel = (value: string) => {
    switch (value) {
      case String(CourseLevel.L1):
        return (
          <>
            <Man /> L1
          </>
        );

      case String(CourseLevel.L2):
        return (
          <>
            <Woman /> L2
          </>
        );

      case String(CourseLevel.L3):
        return (
          <>
            <Woman /> L2
          </>
        );
    }
  };

  /**
   * Display the list of Course filters list
   * @returns template to display the filter in the list
   * with style and translation.
   */
  const displayMainFilters = () => {
    return Object.values(CourseFilterEnum).map((value, i) => {
      return (
        <div
          onClick={() => setCourseFilter({ ...courseFilter, main: value })}
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (courseFilter.main === value ? " active" : "")
          }>
          <span>{getMainFilterLabel(value)}</span>
        </div>
      );
    });
  };

  /**
   * Display course level filters list
   * @returns Template to render course level filters in the list
   * with style and translation
   */
  const displayGenderFilters = () => {
    return Object.values(CourseLevel).map((value, i) => {
      return (
        <div
          onClick={() =>
            setCourseFilter({
              ...courseFilter,
              level: courseFilter.level === value ? "" : value,
            })
          }
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (courseFilter.level === value ? " active" : "")
          }>
          <span>{getGenderFilterLabel(value)}</span>
        </div>
      );
    });
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
            {t("courses.createCourseBtnLabel")}
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">{displayMainFilters()}</div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("courses.levelLabel")}
        </div>

        {displayGenderFilters()}
      </div>
    </div>
  );
};

export default CourseSidebar;
