import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  AssigneeFilterEnum,
  AssigneeGenderEnum,
} from "../modules/assignees/models/Assignee";
import { useTranslation } from "react-i18next";
import {
  ErrorOutline,
  EventAvailable,
  LabelImportant,
  Man,
  Warning,
  Woman,
} from "@mui/icons-material";

interface Props {
  handleCreate: () => void;
}

const Sidebar2 = ({ handleCreate }: Props) => {
  const { t } = useTranslation();

  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(AssigneeFilterEnum.ALL):
        return (
          <>
            <LabelImportant /> <span>{t("all")}</span>
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
    return Object.keys(AssigneeFilterEnum)
      .filter((key) => !isNaN(Number(key)))
      .map((value, i) => {
        return (
          <div
            key={i}
            className={"sidebar-tasks-list-item" + (i === 0 ? " active" : "")}>
            <span>{getMainFilterLabel(value)}</span>
          </div>
        );
      });
  };

  const displaySecondFilters = () => {
    return Object.keys(AssigneeGenderEnum)
      .filter((key) => !isNaN(Number(key)))
      .map((value, i) => {
        return (
          <div key={i} className="sidebar-tasks-list-item">
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

      <div className="sidebar-tasks-list">
        {displayMainFilters()}
        {/* <div className="sidebar-tasks-list-item">
          <span>All</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Nothing done</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>All done</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Don't have Task</span>
        </div> */}
      </div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        {displaySecondFilters()}
        {/* <div className="sidebar-tasks-list-item">
          <span>Men</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Women</span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar2;
