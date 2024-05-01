import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

import {
  AddTask,
  Apps,
  CalendarToday,
  CallMissedOutgoing,
  DonutLarge,
  LabelImportant,
  ListAlt,
  Speed,
  Straighten,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { TodoFilterEnum, TodoPriorityEnum } from "../modules/todos/models/Todo";

interface Props {
  handleCreate: () => void;
  mainFilter: string;
  secondFilter: string;
  setMainFilter: (filter: string) => void;
  setSecondFilter: (filter: string) => void;
}

const Sidebar = ({
  handleCreate,
  mainFilter,
  secondFilter,
  setMainFilter,
  setSecondFilter,
}: Props) => {
  const { t } = useTranslation();

  // React.useEffect(() => {
  //   console.log("Filter: ", mainFilter);
  //   console.log(mainFilter === String(TodoFilterEnum.ALL));
  // }, [mainFilter]);

  // React.useEffect(() => {
  //   console.log("Second Filter: ", secondFilter);
  //   console.log(secondFilter === String(TodoPriorityEnum.MAN));
  // }, [secondFilter]);

  const getMainFilterLabel = (value: string) => {
    switch (value) {
      case String(TodoFilterEnum.ALL):
        return (
          <>
            <Apps /> <span>{t("todos.all")}</span>
          </>
        );
      case String(TodoFilterEnum.PRORITY):
        return (
          <>
            <Straighten /> <span>{t("todos.priority")}</span>
          </>
        );
      case String(TodoFilterEnum.TODAY):
        return (
          <>
            <CalendarToday /> {t("todos.today")}
          </>
        );

      case String(TodoFilterEnum.COMPLETED):
        return (
          <>
            <AddTask /> {t("todos.completed")}
          </>
        );
    }
  };

  const getSecondFilterLabel = (value: string) => {
    switch (value) {
      case String(TodoPriorityEnum.LOW):
        return (
          <>
            <Speed /> {t("todos.low")}
          </>
        );

      case String(TodoPriorityEnum.MEDIUM):
        return (
          <>
            <CallMissedOutgoing /> {t("todos.medium")}
          </>
        );

      case String(TodoPriorityEnum.HIGHT):
        return (
          <>
            <DonutLarge /> {t("todos.hight")}
          </>
        );
    }
  };

  const displayMainFilters = () => {
    return (
      Object.values(TodoFilterEnum)
        // .filter((key) => !isNaN(Number(key)))
        .map((value, i) => {
          return (
            <div
              onClick={() => setMainFilter(value)}
              key={i}
              className={
                "sidebar-tasks-list-item" +
                (mainFilter === value ? " active" : "")
              }>
              <span>{getMainFilterLabel(value)}</span>
            </div>
          );
        })
    );
  };

  const displaySecondFilters = () => {
    return (
      Object.values(TodoPriorityEnum)
        // .filter((key) => !isNaN(Number(key)))
        .map((value, i) => {
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
        })
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
            Create new todo
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
        <div
          onClick={() => setSecondFilter("")}
          className={
            "sidebar-tasks-list-item" + (secondFilter === "" ? " active" : "")
          }>
          <span>
            <LabelImportant />
            <span>{t("todos.all")}</span>
          </span>
        </div>
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

export default Sidebar;
