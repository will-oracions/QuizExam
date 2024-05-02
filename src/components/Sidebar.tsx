import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

import { AddTask, Apps, CalendarToday } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {
  todoLabelEnumToLabel,
  todoPriorityEnumToLabel,
} from "../modules/todos/helpers/EnumParsers";
import {
  TodoFilterEnum,
  TodoLabelEnum,
  TodoPriorityEnum,
} from "../modules/todos/models/Todo";

export interface TodoFilter {
  main: TodoFilterEnum;
  prority: TodoPriorityEnum | "";
  label: TodoLabelEnum | "";
}

interface Props {
  handleCreate: () => void;
  // mainFilter: string;
  // secondFilter: string;
  // setMainFilter: (filter: string) => void;
  // setSecondFilter: (filter: string) => void;
  filter: TodoFilter;
  setFilter: (filter: TodoFilter) => void;
}

const Sidebar = ({
  handleCreate,
  // mainFilter,
  // secondFilter,
  // setMainFilter,
  // setSecondFilter,
  filter,
  setFilter,
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
      // case String(TodoFilterEnum.PRORITY):
      //   return
      //     <>
      //       <Straighten /> <span>{t("todos.priority")}</span>
      //     </>
      //   );
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
      case String(TodoLabelEnum.CSS):
        return (
          <>
            {todoLabelEnumToLabel(value as TodoLabelEnum)} {t("css")}
          </>
        );
      case String(TodoLabelEnum.HTML):
        return (
          <>
            {todoLabelEnumToLabel(value as TodoLabelEnum)} {t("html")}
          </>
        );
      case String(TodoLabelEnum.JQUERY):
        return (
          <>
            {todoLabelEnumToLabel(value as TodoLabelEnum)} {t("jquery")}
          </>
        );
      case String(TodoLabelEnum.NODEJS):
        return (
          <>
            {todoLabelEnumToLabel(value as TodoLabelEnum)} {t("nodejs")}
          </>
        );
    }
  };

  const getPriorityFilters = (value: string) => {
    // switch (value) {
    //   case String(TodoPriorityEnum.LOW):
    return <>{todoPriorityEnumToLabel(value as TodoPriorityEnum)}</>;
    //   case String(TodoPriorityEnum.MEDIUM):
    //     return <>{todoPriorityEnumToLabel(value as TodoPriorityEnum)}</>;
    //   case String(TodoPriorityEnum.HIGHT):
    //     return <>{todoPriorityEnumToLabel(value as TodoPriorityEnum)}</>;
    // }
  };

  const displayMainFilters = () => {
    return (
      Object.values(TodoFilterEnum)
        // .filter((key) => !isNaN(Number(key)))
        .map((value, i) => {
          return (
            <div
              onClick={() => setFilter({ ...filter, main: value })}
              key={i}
              className={
                "sidebar-tasks-list-item" +
                (filter.main === value ? " active" : "")
              }>
              <span>{getMainFilterLabel(value)}</span>
            </div>
          );
        })
    );
  };

  const displaySecondFilters = () => {
    return (
      Object.values(TodoLabelEnum)
        // .filter((key) => !isNaN(Number(key)))
        .map((value, i) => {
          return (
            <div
              onClick={() =>
                setFilter({
                  ...filter,
                  label: filter.label === value ? "" : value,
                })
              }
              key={i}
              className={
                "sidebar-tasks-list-item" +
                (filter.label === value ? " active" : "")
              }>
              <span>{getSecondFilterLabel(value)}</span>
            </div>
          );
        })
    );
  };

  const displayPriorityFilters = () => {
    return Object.values(TodoPriorityEnum).map((value, i) => {
      return (
        <div
          onClick={() =>
            setFilter({
              ...filter,
              prority: filter.prority === value ? "" : value,
            })
          }
          key={i}
          className={
            "sidebar-tasks-list-item" +
            (filter.prority === value ? " active" : "")
          }>
          <span>{getPriorityFilters(value)}</span>
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
            Create new todo
          </Button>
        </Box>
      </div>

      <div className="sidebar-menu">
        <div className="sidebar-tasks-list">{displayMainFilters()}</div>

        {/* Priority Filter */}
        <div className="sidebar-tasks-list">
          <div className="sidebar-tasks-list-label">Prority</div>

          {displayPriorityFilters()}
        </div>

        {/* Lables Filter */}
        <div className="sidebar-tasks-list">
          <div className="sidebar-tasks-list-label">Labels</div>

          {displaySecondFilters()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
