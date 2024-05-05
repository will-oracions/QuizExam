import {
  ErrorOutline,
  EventAvailable,
  Man,
  People,
  Warning,
  Woman,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AssigneeFilterEnum, AssigneeGenderEnum } from "../models/Assignee";
import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../../../components/Layout";
import React from "react";

export interface AssigneeFilter {
  main: AssigneeFilterEnum | "";
  gender: AssigneeGenderEnum | "";
}

interface Props {
  handleCreate: () => void;
  assigneeFilter: AssigneeFilter;
  setAssigneeFilter: (filter: AssigneeFilter) => void;
}

const AssigneeSidebar = ({
  /**
   * Handler to create a new Assignee
   */
  handleCreate,
  /**
   * Filter to apply to the assignees list data
   */
  assigneeFilter,
  /**
   * Change Assignee filter
   */
  setAssigneeFilter,
}: Props) => {
  const { t } = useTranslation();

  const { closeSidebar } = useOutletContext<IOutletContext>();

  React.useEffect(() => closeSidebar(), [assigneeFilter]);

  /**
   * Convert assignee main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value assignee enum
   * @returns template to render to assignee filters list
   * with style and translation
   */
  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(AssigneeFilterEnum.ALL):
        return (
          <>
            <People /> <span>{t("all")}</span>
          </>
        );
      case String(AssigneeFilterEnum.ALL_DONE):
        return (
          <>
            <EventAvailable /> <span>{t("allTaskDone")}</span>
          </>
        );
      case String(AssigneeFilterEnum.DONT_HAVE_TASK):
        return (
          <>
            <ErrorOutline /> {t("noTaskAssigned")}
          </>
        );

      case String(AssigneeFilterEnum.NOTHING_DONE):
        return (
          <>
            <Warning /> {t("NoTaskDone")}
          </>
        );
    }
  };

  /**
   * Convert assignee gender filter to appropriate template
   * to appropriate template to render in the list
   * @param value
   * @returns template to render to assignee gender filters list
   * with style and translation
   */
  const getGenderFilterLabel = (value: string) => {
    switch (value) {
      case String(AssigneeGenderEnum.MAN):
        return (
          <>
            <Man /> {t("men")}
          </>
        );

      case String(AssigneeGenderEnum.WOMEN):
        return (
          <>
            <Woman /> {t("women")}
          </>
        );
    }
  };

  /**
   * Display the list of Assignee filters list
   * @returns template to display the filter in the list
   * with style and translation.
   */
  const displayMainFilters = () => {
    return Object.values(AssigneeFilterEnum).map((value, i) => {
      return (
        <div
          onClick={() => setAssigneeFilter({ ...assigneeFilter, main: value })}
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (assigneeFilter.main === value ? " active" : "")
          }>
          <span>{getMainFilterLabel(value)}</span>
        </div>
      );
    });
  };

  /**
   * Display assignee gender filters list
   * @returns Template to render assignee gender filters in the list
   * with style and translation
   */
  const displayGenderFilters = () => {
    return Object.values(AssigneeGenderEnum).map((value, i) => {
      return (
        <div
          onClick={() =>
            setAssigneeFilter({
              ...assigneeFilter,
              gender: assigneeFilter.gender === value ? "" : value,
            })
          }
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (assigneeFilter.gender === value ? " active" : "")
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
            {t("assignees.createAssgineeBtnLabel")}
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">{displayMainFilters()}</div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">
          {t("assignees.genderLabel")}
        </div>

        {displayGenderFilters()}
      </div>
    </div>
  );
};

export default AssigneeSidebar;
