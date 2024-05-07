import { Man, People, Woman } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../../../components/Layout";
import { UserFilterEnum, UserGenderEnum } from "../models/User";

export interface UserFilter {
  main: UserFilterEnum | "";
  gender: UserGenderEnum | "";
}

interface Props {
  handleCreate: () => void;
  userFilter: UserFilter;
  setUserFilter: (filter: UserFilter) => void;
}

const UserSidebar = ({
  /**
   * Handler to create a new User
   */
  handleCreate,
  /**
   * Filter to apply to the users list data
   */
  userFilter,
  /**
   * Change User filter
   */
  setUserFilter,
}: Props) => {
  const { t } = useTranslation();

  const { closeSidebar } = useOutletContext<IOutletContext>();

  React.useEffect(() => closeSidebar(), [userFilter]);

  /**
   * Convert user main filter enum to appropriate template
   * to appropriate template to render in the list
   * @param value user enum
   * @returns template to render to user filters list
   * with style and translation
   */
  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(UserFilterEnum.ALL):
        return (
          <>
            <People /> <span>{t("all")}</span>
          </>
        );
      // case String(UserFilterEnum.ALL_DONE):
      //   return (
      //     <>
      //       <EventAvailable /> <span>{t("allTaskDone")}</span>
      //     </>
      //   );
      // case String(UserFilterEnum.DONT_HAVE_TASK):
      //   return (
      //     <>
      //       <ErrorOutline /> {t("noTaskAssigned")}
      //     </>
      //   );

      // case String(UserFilterEnum.NOTHING_DONE):
      //   return (
      //     <>
      //       <Warning /> {t("NoTaskDone")}
      //     </>
      //   );
    }
  };

  /**
   * Convert user gender filter to appropriate template
   * to appropriate template to render in the list
   * @param value
   * @returns template to render to user gender filters list
   * with style and translation
   */
  const getGenderFilterLabel = (value: string) => {
    switch (value) {
      case String(UserGenderEnum.MAN):
        return (
          <>
            <Man /> {t("men")}
          </>
        );

      case String(UserGenderEnum.WOMEN):
        return (
          <>
            <Woman /> {t("women")}
          </>
        );
    }
  };

  /**
   * Display the list of User filters list
   * @returns template to display the filter in the list
   * with style and translation.
   */
  const displayMainFilters = () => {
    return Object.values(UserFilterEnum).map((value, i) => {
      return (
        <div
          onClick={() => setUserFilter({ ...userFilter, main: value })}
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (userFilter.main === value ? " active" : "")
          }>
          <span>{getMainFilterLabel(value)}</span>
        </div>
      );
    });
  };

  /**
   * Display user gender filters list
   * @returns Template to render user gender filters in the list
   * with style and translation
   */
  const displayGenderFilters = () => {
    return Object.values(UserGenderEnum).map((value, i) => {
      return (
        <div
          onClick={() =>
            setUserFilter({
              ...userFilter,
              gender: userFilter.gender === value ? "" : value,
            })
          }
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (userFilter.gender === value ? " active" : "")
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
            {t("users.createUserBtnLabel")}
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">{displayMainFilters()}</div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">{t("users.genderLabel")}</div>

        {displayGenderFilters()}
      </div>
    </div>
  );
};

export default UserSidebar;
