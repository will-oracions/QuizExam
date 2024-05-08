import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useCustomModal from "../../../../components/CustomModal/hooks/useCustomModal";
import { IOutletContext } from "../../../../components/Layout";
import QuizquestionDatatable from "../components/QuizquestionDatatable";
import QuizquestionModals from "../components/QuizquestionModals";

import QuizquestionSidebar from "../components/QuizquestionSidebar";
import useCreateQuizquestion from "../hooks/useCreateQuizquestion";
import useDeleteQuizquestion from "../hooks/useDeleteQuizquestion";
import useQuizquestions from "../hooks/useQuizquestions";
import useUpdateQuizquestion from "../hooks/useUpdateQuizquestion";
import { Quizquestion } from "../models/Quizquestion";

const Quizquestions = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [quizQuestions, setQuizquestions] = React.useState<Quizquestion[]>([]);
  // const [filteredQuizquestions] = React.useState<Quizquestion[]>([]);
  const [editingQuizquestion, setEditingQuizquestion] =
    React.useState<Quizquestion | null>(null);
  const [deletingQuizquestion, setDeletingQuizquestion] =
    React.useState<Quizquestion | null>(null);

  // const [quizQuestionFiltered] = React.useState<boolean>(false);
  // const [quizQuestionFilter, setQuizquestionFilter] = React.useState<QuizquestionFilter>({
  //   main: QuizquestionFilterEnum.ALL,
  //   level: "",
  // });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("quizQuestions.quizQuestionCreated"), {
      type: "info",
      className: "app-toast",
    });

  const openQuizquestionCreateEditModal = useCustomModal();
  const openQuizquestionDeleteModal = useCustomModal();

  const createQuizquestionMutation = useCreateQuizquestion();
  const editQuizquestionMutation = useUpdateQuizquestion();
  const deleteQuizquestionMutation = useDeleteQuizquestion();
  const getQuizquestionListQuery = useQuizquestions();

  // console.log("Asss: ", getQuizquestionListQuery.data);

  const quizQuestionFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getQuizquestionListQuery.data &&
      setQuizquestions(getQuizquestionListQuery.data);
  }, [getQuizquestionListQuery.data]);

  // React.useEffect(() => {
  //   handleQuizquestionFilters();
  // }, [quizQuestionFilter, quizQuestions]);

  const triggerSubmitForm = () => {
    quizQuestionFormRef.current?.triggerSubmit();
  };

  const onSubmitQuizquestionForm = (data: Partial<Quizquestion>) => {
    // console.log("Data: ", data);

    const handler = editingQuizquestion
      ? handleSaveUpdateQuizquestion
      : handleSaveQuizquestion;

    handler(data);
  };

  const handleSaveQuizquestion = (data: Partial<Quizquestion>) => {
    // const exist = quizQuestions.find(
    //   (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    // );
    // if (exist) {
    //   setErrorMessage(t("quizQuestions.nameAlreadyExist"));
    //   return;
    // }

    setErrorMessage("");

    createQuizquestionMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizquestions([res as Quizquestion, ...quizQuestions]);
        notify();
        openQuizquestionCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateQuizquestion = (data: Partial<Quizquestion>) => {
    setErrorMessage("");

    editQuizquestionMutation.mutate(data as Quizquestion, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setQuizquestions(quizQuestions.map((a) => (a.id === res.id ? res : a)));
        setEditingQuizquestion(null);
        // notify();
        openQuizquestionCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteQuizquestion = () => {
    if (!deletingQuizquestion) return;
    // console.log("Delete: ", deletingQuizquestion);
    deleteQuizquestionMutation.mutate(deletingQuizquestion.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setQuizquestions((prev) =>
          prev.filter((a) => a.id != deletingQuizquestion.id)
        );
        setDeletingQuizquestion(null);
        openQuizquestionDeleteModal.closeModal();
      },
    });
  };

  // const handleQuizquestionFilters = () => {
  // console.log(quizQuestionFilter);
  // let filteredSource = quizQuestions;
  // if (quizQuestionFilter.main === QuizquestionFilterEnum.ALL) {
  //   filteredSource = quizQuestions;
  // } else {
  //   filteredSource = quizQuestions.filter((a) => {
  //     if (
  //       quizQuestionFilter.main === QuizquestionFilterEnum.ALL_DONE &&
  //       a.todos &&
  //       a.todos.length > 0 &&
  //       a.todos.every((t) => t.completed === true)
  //     ) {
  //       return true;
  //     }
  //     if (
  //       quizQuestionFilter.main === QuizquestionFilterEnum.NOTHING_DONE &&
  //       a.todos &&
  //       a.todos.length > 0 &&
  //       a.todos.every((t) => t.completed == false)
  //     ) {
  //       return true;
  //     }
  //     if (
  //       quizQuestionFilter.main === QuizquestionFilterEnum.DONT_HAVE_TASK &&
  //       a.todos?.length === 0
  //     ) {
  //       return true;
  //     }
  //   });
  // }
  // if (quizQuestionFilter.gender !== "") {
  //   filteredSource = filteredSource.filter(
  //     (a) => a.gender === quizQuestionFilter.gender
  //   );
  // }
  // setQuizquestionFiltered(true);
  // setFilteredQuizquestions(filteredSource);
  // };

  const handleExportToPDF = () => {
    // const data: Quizquestion[] = quizQuestionFiltered ? filteredQuizquestions : quizQuestions;
    // exportToPdf<Partial<Quizquestion>>(
    //   toQuizquestionExportable(data),
    //   `Quizquestions-list-${toCalendarDate(new Date())}`
    // );
  };

  const handleExportToExcel = () => {
    // const data: Quizquestion[] = quizQuestionFiltered ? filteredQuizquestions : quizQuestions;
    // exportToExcel<Partial<Quizquestion>>(
    //   toQuizquestionExportable(data),
    //   `Quizquestions-list-${toCalendarDate(new Date())}`
    // );
  };

  const openCreateQuizquestionModal = () => {
    openQuizquestionCreateEditModal.openModal();
    setErrorMessage("");
    setEditingQuizquestion(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: Quizquestion) => {
    // console.log(row);
    setEditingQuizquestion(row);
    setErrorMessage("");
    // closeSidebar();
    openQuizquestionCreateEditModal.openModal();
  };

  const openDeleteQuizquestionModal = (row: Quizquestion) => {
    // console.log(row);
    setDeletingQuizquestion(row);
    openQuizquestionDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <QuizquestionSidebar handleCreate={openCreateQuizquestionModal} />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">
            {t("quizQuestions.quizQuestionsPageTitle")}
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

          <QuizquestionDatatable
            quizQuestions={quizQuestions}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteQuizquestionModal}
          />
        </Box>
      </main>

      <QuizquestionModals
        openQuizquestionCreateEditModal={openQuizquestionCreateEditModal}
        openQuizquestionDeleteModal={openQuizquestionDeleteModal}
        errorMessage={errorMessage}
        quizQuestionFormRef={quizQuestionFormRef}
        onSubmitQuizquestionForm={onSubmitQuizquestionForm}
        addEditModalIsLoading={
          createQuizquestionMutation.isPending ||
          editQuizquestionMutation.isPending
        }
        isDeleting={deleteQuizquestionMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingQuizquestion={editingQuizquestion}
        triggerDelete={handleDeleteQuizquestion}
      />
    </>
  );
};

export default Quizquestions;
