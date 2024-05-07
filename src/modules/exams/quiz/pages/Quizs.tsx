import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useCustomModal from "../../../../components/CustomModal/hooks/useCustomModal";
import { IOutletContext } from "../../../../components/Layout";
import exportToPdf, { exportToExcel } from "../../../../helpers/exporter";
import { toCalendarDate } from "../../../../utils";
import QuizDatatable from "../components/QuizDatatable";
import QuizModals from "../components/QuizModals";
import QuizSidebar, { QuizFilter } from "../components/QuizSidebar";
import { toQuizExportable } from "../helpers/quizExporter";
import useCreateQuiz from "../hooks/useCreateQuiz";
import useDeleteQuiz from "../hooks/useDeleteQuiz";
import useUpdateQuiz from "../hooks/useUpdateQuiz";
import useQuizs from "../hooks/useQuizs";
import { Quiz, QuizFilterEnum } from "../models/Quiz";

const Quizs = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [quizs, setQuizs] = React.useState<Quiz[]>([]);
  const [filteredQuizs] = React.useState<Quiz[]>([]);
  const [editingQuiz, setEditingQuiz] = React.useState<Quiz | null>(null);
  const [deletingQuiz, setDeletingQuiz] = React.useState<Quiz | null>(null);

  const [quizFiltered] = React.useState<boolean>(false);
  const [quizFilter, setQuizFilter] = React.useState<QuizFilter>({
    main: QuizFilterEnum.ALL,
    level: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("quizs.quizCreated"), { type: "info", className: "app-toast" });

  const openQuizCreateEditModal = useCustomModal();
  const openQuizDeleteModal = useCustomModal();

  const createQuizMutation = useCreateQuiz();
  const editQuizMutation = useUpdateQuiz();
  const deleteQuizMutation = useDeleteQuiz();
  const getQuizListQuery = useQuizs();

  // console.log("Asss: ", getQuizListQuery.data);

  const quizFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getQuizListQuery.data && setQuizs(getQuizListQuery.data);
  }, [getQuizListQuery.data]);

  React.useEffect(() => {
    handleQuizFilters();
  }, [quizFilter, quizs]);

  const triggerSubmitForm = () => {
    quizFormRef.current?.triggerSubmit();
  };

  const onSubmitQuizForm = (data: Partial<Quiz>) => {
    // console.log("Data: ", data);

    const handler = editingQuiz ? handleSaveUpdateQuiz : handleSaveQuiz;

    handler(data);
  };

  const handleSaveQuiz = (data: Partial<Quiz>) => {
    const exist = quizs.find(
      (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    );
    if (exist) {
      setErrorMessage(t("quizs.nameAlreadyExist"));
      return;
    }

    setErrorMessage("");

    createQuizMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizs([res as Quiz, ...quizs]);
        notify();
        openQuizCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateQuiz = (data: Partial<Quiz>) => {
    setErrorMessage("");

    editQuizMutation.mutate(data as Quiz, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizs(quizs.map((a) => (a.id === res.id ? res : a)));
        setEditingQuiz(null);
        // notify();
        openQuizCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteQuiz = () => {
    if (!deletingQuiz) return;
    // console.log("Delete: ", deletingQuiz);
    deleteQuizMutation.mutate(deletingQuiz.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setQuizs((prev) => prev.filter((a) => a.id != deletingQuiz.id));
        setDeletingQuiz(null);
        openQuizDeleteModal.closeModal();
      },
    });
  };

  const handleQuizFilters = () => {
    // console.log(quizFilter);
    // let filteredSource = quizs;
    // if (quizFilter.main === QuizFilterEnum.ALL) {
    //   filteredSource = quizs;
    // } else {
    //   filteredSource = quizs.filter((a) => {
    //     if (
    //       quizFilter.main === QuizFilterEnum.ALL_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed === true)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       quizFilter.main === QuizFilterEnum.NOTHING_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed == false)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       quizFilter.main === QuizFilterEnum.DONT_HAVE_TASK &&
    //       a.todos?.length === 0
    //     ) {
    //       return true;
    //     }
    //   });
    // }
    // if (quizFilter.gender !== "") {
    //   filteredSource = filteredSource.filter(
    //     (a) => a.gender === quizFilter.gender
    //   );
    // }
    // setQuizFiltered(true);
    // setFilteredQuizs(filteredSource);
  };

  const handleExportToPDF = () => {
    const data: Quiz[] = quizFiltered ? filteredQuizs : quizs;
    exportToPdf<Partial<Quiz>>(
      toQuizExportable(data),
      `Quizs-list-${toCalendarDate(new Date())}`
    );
  };

  const handleExportToExcel = () => {
    const data: Quiz[] = quizFiltered ? filteredQuizs : quizs;
    exportToExcel<Partial<Quiz>>(
      toQuizExportable(data),
      `Quizs-list-${toCalendarDate(new Date())}`
    );
  };

  const openCreateQuizModal = () => {
    openQuizCreateEditModal.openModal();
    setErrorMessage("");
    setEditingQuiz(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: Quiz) => {
    // console.log(row);
    setEditingQuiz(row);
    setErrorMessage("");
    // closeSidebar();
    openQuizCreateEditModal.openModal();
  };

  const openDeleteQuizModal = (row: Quiz) => {
    // console.log(row);
    setDeletingQuiz(row);
    openQuizDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizSidebar
          quizFilter={quizFilter}
          setQuizFilter={setQuizFilter}
          handleCreate={openCreateQuizModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">{t("quizs.quizsPageTitle")}</h3>

          <Box marginBottom={2} display="flex" justifyContent="flex-end">
            <Button
              size={isSmallScreen ? "small" : "medium"}
              onClick={handleExportToExcel}
              variant="contained"
              color="inherit"
              style={{ marginTop: "10px", marginRight: "1rem" }}>
              {t("exportExcelBtnLabel")}
            </Button>

            <Button
              size={isSmallScreen ? "small" : "medium"}
              onClick={handleExportToPDF}
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              {t("exportBtnLabel")}
            </Button>
          </Box>

          <QuizDatatable
            quizs={quizFiltered ? filteredQuizs : quizs}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteQuizModal}
          />
        </Box>
      </main>

      <QuizModals
        openQuizCreateEditModal={openQuizCreateEditModal}
        openQuizDeleteModal={openQuizDeleteModal}
        errorMessage={errorMessage}
        quizFormRef={quizFormRef}
        onSubmitQuizForm={onSubmitQuizForm}
        addEditModalIsLoading={
          createQuizMutation.isPending || editQuizMutation.isPending
        }
        isDeleting={deleteQuizMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingQuiz={editingQuiz}
        triggerDelete={handleDeleteQuiz}
      />
    </>
  );
};

export default Quizs;
