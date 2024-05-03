import { Box, Button } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import TodoSidebar, { TodoFilter } from "../components/TodoSidebar";
import exportToPdf from "../../../helpers/exporter";
import useAssignees from "../../assignees/hooks/useAssignees";
import TodoDatatable from "../components/TodoDatatable";
import { toAssigneeAutoCompleteType } from "../components/TodoForm";
import TodoModals from "../components/TodoModals";
import useCreateTodo from "../hooks/useCreateTodo";
import useDeleteTodo from "../hooks/useDeleteTodo";
import useTodos from "../hooks/useTodos";
import useUpdateTodo from "../hooks/useUpdateTodo";
import { Todo, TodoFilterEnum, TodoLabelEnum } from "../models/Todo";
import { toCalendarDate } from "../../../utils";

const Todos = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = React.useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = React.useState<Todo | null>(null);
  const [deletingTodo, setDeletingTodo] = React.useState<Todo | null>(null);

  const [todoFiltered, setTodoFiltered] = React.useState<boolean>(false);
  const [todoFilter, setTodoFilter] = React.useState<TodoFilter>({
    main: TodoFilterEnum.ALL,
    prority: "",
    label: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast("Todo created", { type: "info", className: "app-toast" });

  const todoCreateModal = useCustomModal();
  const todoDeleteModal = useCustomModal();

  const createTodoMutation = useCreateTodo();
  const editTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const getTodoListQuery = useTodos();
  const getAssigneesListQuery = useAssignees();

  // console.log("Todolist data: ", getTodoListQuery.data);

  // console.log("Assignees data: ", getAssigneesListQuery.data);

  const formRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getTodoListQuery.data && setTodos(getTodoListQuery.data);
  }, [getTodoListQuery.data]);

  React.useEffect(() => {
    handleTodoFilters();
  }, [todoFilter, todos]);

  const triggerSubmitForm = () => {
    formRef.current?.triggerSubmit();
  };

  const onSubmitTodoForm = (data: Partial<Todo>) => {
    // console.log("Data: ", data);

    const handler = editingTodo ? handleSaveUpdateTodo : handleSaveTodo;

    handler(data);
  };

  const handleSaveTodo = (data: Partial<Todo>) => {
    setErrorMessage("");

    createTodoMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setTodos([res as Todo, ...todos]);
        notify();
        todoCreateModal.closeModal();
      },
    });
  };

  const handleSaveUpdateTodo = (data: Partial<Todo>) => {
    setErrorMessage("");

    editTodoMutation.mutate(data as Todo, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setTodos(todos.map((a) => (a.id === res.id ? res : a)));
        setEditingTodo(null);
        // notify();
        todoCreateModal.closeModal();
      },
    });
  };

  const handleDeleteTodo = () => {
    if (!deletingTodo) return;
    // console.log("Delete: ", deletingTodo);
    deleteTodoMutation.mutate(deletingTodo.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setTodos((prev) => prev.filter((a) => a.id != deletingTodo.id));
        setDeletingTodo(null);
        todoDeleteModal.closeModal();
      },
    });
  };

  const handleTodoFilters = () => {
    // console.log(todoFilter);
    let filteredSource = todos;

    if (todoFilter.main === TodoFilterEnum.ALL) {
      filteredSource = todos;
    } else {
      filteredSource = todos.filter((t) => {
        if (
          todoFilter.main === TodoFilterEnum.COMPLETED &&
          t.completed === true
        ) {
          return true;
        }

        if (
          todoFilter.main === TodoFilterEnum.TODAY &&
          t.startDate &&
          toCalendarDate(new Date(t.startDate)) === toCalendarDate(new Date())
        ) {
          return true;
        }
      });
    }

    // console.log("fff: ", filteredSource);

    if (todoFilter.prority !== "") {
      filteredSource = filteredSource.filter(
        (t) => t.prority === todoFilter.prority
      );
    }

    if (todoFilter.label !== "") {
      filteredSource = filteredSource.filter((t) =>
        t.labels.includes(todoFilter.label as TodoLabelEnum)
      );
    }

    setTodoFiltered(true);

    setFilteredTodos(filteredSource);
  };

  const handleExportToPDF = () => {
    exportToPdf<Todo>(
      filteredTodos.length > 0 ? filteredTodos : todos,
      "todos-list"
    );
  };

  const openCreateTodoModal = () => {
    todoCreateModal.openModal();
    setErrorMessage("");
    setEditingTodo(null);
  };

  const opentEditAssigeeModal = (row: Todo) => {
    // console.log(row);
    setEditingTodo(row);
    setErrorMessage("");
    todoCreateModal.openModal();
  };

  const openDeleteTodoModal = (row: Todo) => {
    // console.log(row);
    setDeletingTodo(row);
    todoDeleteModal.openModal();
  };

  const buildAssigneeAutoCompleteFieldData = () => {
    if (!getAssigneesListQuery.data) return [];
    return getAssigneesListQuery.data.map((a) => toAssigneeAutoCompleteType(a));
  };

  return (
    <>
      <div id="app-sidebar">
        <TodoSidebar
          filter={todoFilter}
          setFilter={setTodoFilter}
          // mainFilter={mainFilter}
          // secondFilter={secondFilter}
          // setMainFilter={setMainFilter}
          // setSecondFilter={setSecondFilter}
          handleCreate={openCreateTodoModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">Manage Todos</h3>

          <Box marginBottom={2} display="flex" justifyContent="flex-end">
            <Button
              onClick={handleExportToPDF}
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              Export to PDF
            </Button>
          </Box>

          <TodoDatatable
            todos={todoFiltered ? filteredTodos : todos}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteTodoModal}
          />
        </Box>
      </main>

      <TodoModals
        todoCreateModal={todoCreateModal}
        todoDeleteModal={todoDeleteModal}
        errorMessage={errorMessage}
        formRef={formRef}
        onSubmitTodoForm={onSubmitTodoForm}
        addEditModalIsLoading={
          createTodoMutation.isPending || editTodoMutation.isPending
        }
        isDeleting={deleteTodoMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingTodo={editingTodo}
        triggerDelete={handleDeleteTodo}
        assignees={buildAssigneeAutoCompleteFieldData()}
      />
    </>
  );
};

export default Todos;
