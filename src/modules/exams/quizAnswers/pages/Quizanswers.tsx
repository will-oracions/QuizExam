import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useCustomModal from "../../../../components/CustomModal/hooks/useCustomModal";
import { IOutletContext } from "../../../../components/Layout";
import QuizanswerDatatable from "../components/QuizanswerDatatable";
import QuizanswerModals from "../components/QuizanswerModals";

import QuizanswerSidebar from "../components/QuizanswerSidebar";
import useCreateQuizanswer from "../hooks/useCreateQuizanswer";
import useDeleteQuizanswer from "../hooks/useDeleteQuizanswer";
import useQuizanswers from "../hooks/useQuizanswers";
import useUpdateQuizanswer from "../hooks/useUpdateQuizanswer";
import { Quizanswer } from "../models/Quizanswer";

const Quizanswers = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [quizAnswers, setQuizanswers] = React.useState<Quizanswer[]>([]);
  // const [filteredQuizanswers] = React.useState<Quizanswer[]>([]);
  const [editingQuizanswer, setEditingQuizanswer] =
    React.useState<Quizanswer | null>(null);
  const [deletingQuizanswer, setDeletingQuizanswer] =
    React.useState<Quizanswer | null>(null);

  // const [quizAnswerFiltered] = React.useState<boolean>(false);
  // const [quizAnswerFilter, setQuizanswerFilter] = React.useState<QuizanswerFilter>({
  //   main: QuizanswerFilterEnum.ALL,
  //   level: "",
  // });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("quizAnswers.quizAnswerCreated"), {
      type: "info",
      className: "app-toast",
    });

  const openQuizanswerCreateEditModal = useCustomModal();
  const openQuizanswerDeleteModal = useCustomModal();

  const createQuizanswerMutation = useCreateQuizanswer();
  const editQuizanswerMutation = useUpdateQuizanswer();
  const deleteQuizanswerMutation = useDeleteQuizanswer();
  const getQuizanswerListQuery = useQuizanswers();

  // console.log("Asss: ", getQuizanswerListQuery.data);

  const quizAnswerFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getQuizanswerListQuery.data &&
      setQuizanswers(getQuizanswerListQuery.data);
  }, [getQuizanswerListQuery.data]);

  // React.useEffect(() => {
  //   handleQuizanswerFilters();
  // }, [quizAnswerFilter, quizAnswers]);

  const triggerSubmitForm = () => {
    quizAnswerFormRef.current?.triggerSubmit();
  };

  const onSubmitQuizanswerForm = (data: Partial<Quizanswer>) => {
    // console.log("Data: ", data);

    const handler = editingQuizanswer
      ? handleSaveUpdateQuizanswer
      : handleSaveQuizanswer;

    handler(data);
  };

  const handleSaveQuizanswer = (data: Partial<Quizanswer>) => {
    // const exist = quizAnswers.find(
    //   (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    // );
    // if (exist) {
    //   setErrorMessage(t("quizAnswers.nameAlreadyExist"));
    //   return;
    // }

    setErrorMessage("");

    createQuizanswerMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizanswers([res as Quizanswer, ...quizAnswers]);
        notify();
        openQuizanswerCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateQuizanswer = (data: Partial<Quizanswer>) => {
    setErrorMessage("");

    editQuizanswerMutation.mutate(data as Quizanswer, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizanswers(quizAnswers.map((a) => (a.id === res.id ? res : a)));
        setEditingQuizanswer(null);
        // notify();
        openQuizanswerCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteQuizanswer = () => {
    if (!deletingQuizanswer) return;
    // console.log("Delete: ", deletingQuizanswer);
    deleteQuizanswerMutation.mutate(deletingQuizanswer.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setQuizanswers((prev) =>
          prev.filter((a) => a.id != deletingQuizanswer.id)
        );
        setDeletingQuizanswer(null);
        openQuizanswerDeleteModal.closeModal();
      },
    });
  };

  // const handleQuizanswerFilters = () => {
  // console.log(quizAnswerFilter);
  // let filteredSource = quizAnswers;
  // if (quizAnswerFilter.main === QuizanswerFilterEnum.ALL) {
  //   filteredSource = quizAnswers;
  // } else {
  //   filteredSource = quizAnswers.filter((a) => {
  //     if (
  //       quizAnswerFilter.main === QuizanswerFilterEnum.ALL_DONE &&
  //       a.todos &&
  //       a.todos.length > 0 &&
  //       a.todos.every((t) => t.completed === true)
  //     ) {
  //       return true;
  //     }
  //     if (
  //       quizAnswerFilter.main === QuizanswerFilterEnum.NOTHING_DONE &&
  //       a.todos &&
  //       a.todos.length > 0 &&
  //       a.todos.every((t) => t.completed == false)
  //     ) {
  //       return true;
  //     }
  //     if (
  //       quizAnswerFilter.main === QuizanswerFilterEnum.DONT_HAVE_TASK &&
  //       a.todos?.length === 0
  //     ) {
  //       return true;
  //     }
  //   });
  // }
  // if (quizAnswerFilter.gender !== "") {
  //   filteredSource = filteredSource.filter(
  //     (a) => a.gender === quizAnswerFilter.gender
  //   );
  // }
  // setQuizanswerFiltered(true);
  // setFilteredQuizanswers(filteredSource);
  // };

  const handleExportToPDF = () => {
    // const data: Quizanswer[] = quizAnswerFiltered ? filteredQuizanswers : quizAnswers;
    // exportToPdf<Partial<Quizanswer>>(
    //   toQuizanswerExportable(data),
    //   `Quizanswers-list-${toCalendarDate(new Date())}`
    // );
  };

  const handleExportToExcel = () => {
    // const data: Quizanswer[] = quizAnswerFiltered ? filteredQuizanswers : quizAnswers;
    // exportToExcel<Partial<Quizanswer>>(
    //   toQuizanswerExportable(data),
    //   `Quizanswers-list-${toCalendarDate(new Date())}`
    // );
  };

  const openCreateQuizanswerModal = () => {
    openQuizanswerCreateEditModal.openModal();
    setErrorMessage("");
    setEditingQuizanswer(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: Quizanswer) => {
    // console.log(row);
    setEditingQuizanswer(row);
    setErrorMessage("");
    // closeSidebar();
    openQuizanswerCreateEditModal.openModal();
  };

  const openDeleteQuizanswerModal = (row: Quizanswer) => {
    // console.log(row);
    setDeletingQuizanswer(row);
    openQuizanswerDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizanswerSidebar handleCreate={openCreateQuizanswerModal} />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">
            {t("quizAnswers.quizAnswersPageTitle")}
          </h3>

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

          <QuizanswerDatatable
            quizAnswers={quizAnswers}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteQuizanswerModal}
          />
        </Box>
      </main>

      <QuizanswerModals
        openQuizanswerCreateEditModal={openQuizanswerCreateEditModal}
        openQuizanswerDeleteModal={openQuizanswerDeleteModal}
        errorMessage={errorMessage}
        quizAnswerFormRef={quizAnswerFormRef}
        onSubmitQuizanswerForm={onSubmitQuizanswerForm}
        addEditModalIsLoading={
          createQuizanswerMutation.isPending ||
          editQuizanswerMutation.isPending
        }
        isDeleting={deleteQuizanswerMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingQuizanswer={editingQuizanswer}
        triggerDelete={handleDeleteQuizanswer}
      />
    </>
  );
};

export default Quizanswers;
