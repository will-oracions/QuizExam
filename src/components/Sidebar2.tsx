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
import {
  AssigneeFilterEnum,
  AssigneeGenderEnum,
} from "../modules/assignees/models/Assignee";

interface Props {
  handleCreate: () => void;
  mainFilter: string;
  secondFilter: string;
  setMainFilter: (filter: string) => void;
  setSecondFilter: (filter: string) => void;
}

const Sidebar2 = ({
  handleCreate,
  mainFilter,
  secondFilter,
  setMainFilter,
  setSecondFilter,
}: Props) => {
  const { t } = useTranslation();

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

  const getSecondFilterLabel = (value: string) => {
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

  const displayMainFilters = () => {
    return Object.values(AssigneeFilterEnum).map((value, i) => {
      return (
        <div
          onClick={() => setMainFilter(value)}
          key={i}
          className={
            "sidebar-tasks-list-item" + (mainFilter === value ? " active" : "")
          }>
          <span>{getMainFilterLabel(value)}</span>
        </div>
      );
    });
  };

  const displaySecondFilters = () => {
    return Object.values(AssigneeGenderEnum).map((value, i) => {
      return (
        <div
          onClick={() => setSecondFilter(value)}
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (secondFilter === value ? " active" : "")
          }>
          <span>{getSecondFilterLabel(value)}</span>
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
            Create new Assignee
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">{displayMainFilters()}</div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-label">Genre</div>

        {displaySecondFilters()}
      </div>
    </div>
  );
};

export default Sidebar2;
