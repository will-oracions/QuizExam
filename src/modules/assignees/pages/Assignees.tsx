import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeDatatable from "../components/AssigneeDatatable";
import AssigneeModals from "../components/AssigneeModals";
import useAssignees from "../hooks/useAssignees";
import useCreateAssignee from "../hooks/useCreateAssignee";
import { Assignee, AssigneeFilterEnum } from "../models/Assignee";
import AssigneeSidebar, { AssigneeFilter } from "../components/AssigneeSidebar";
import useUpdateAssignee from "../hooks/useUpdateAssignee";
import exportToPdf, { exportToExcel } from "../../../helpers/exporter";
import useDeleteAssignee from "../hooks/useDeleteAssignee";
import { useTranslation } from "react-i18next";
import { toAssigneeExportable } from "../helpers/assigneeExporter";
import { toCalendarDate } from "../../../utils";
import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../../../components/Layout";

const Assignees = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [assignees, setAssignees] = React.useState<Assignee[]>([]);
  const [filteredAssignees, setFilteredAssignees] = React.useState<Assignee[]>(
    []
  );
  const [editingAssignee, setEditingAssignee] = React.useState<Assignee | null>(
    null
  );
  const [deletingAssignee, setDeletingAssignee] =
    React.useState<Assignee | null>(null);

  const [assigneeFiltered, setAssigneeFiltered] =
    React.useState<boolean>(false);
  const [assigneeFilter, setAssigneeFilter] = React.useState<AssigneeFilter>({
    main: AssigneeFilterEnum.ALL,
    gender: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("assigneeCreated"), { type: "info", className: "app-toast" });

  const openAssigneeCreateEditModal = useCustomModal();
  const openAssigneeDeleteModal = useCustomModal();

  const createAssigneeMutation = useCreateAssignee();
  const editAssigneeMutation = useUpdateAssignee();
  const deleteAssigneeMutation = useDeleteAssignee();
  const getAssigneeListQuery = useAssignees();

  // console.log("Asss: ", getAssigneeListQuery.data);

  const assigneeFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getAssigneeListQuery.data && setAssignees(getAssigneeListQuery.data);
  }, [getAssigneeListQuery.data]);

  React.useEffect(() => {
    handleAssigneeFilters();
  }, [assigneeFilter, assignees]);

  const triggerSubmitForm = () => {
    assigneeFormRef.current?.triggerSubmit();
  };

  const onSubmitAssigneeForm = (data: Partial<Assignee>) => {
    // console.log("Data: ", data);

    const handler = editingAssignee
      ? handleSaveUpdateAssignee
      : handleSaveAssignee;

    handler(data);
  };

  const handleSaveAssignee = (data: Partial<Assignee>) => {
    const exist = assignees.find(
      (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    );
    if (exist) {
      setErrorMessage(t("assignees.nameAlreadyExist"));
      return;
    }

    setErrorMessage("");

    createAssigneeMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setAssignees([res as Assignee, ...assignees]);
        notify();
        openAssigneeCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateAssignee = (data: Partial<Assignee>) => {
    setErrorMessage("");

    editAssigneeMutation.mutate(data as Assignee, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setAssignees(assignees.map((a) => (a.id === res.id ? res : a)));
        setEditingAssignee(null);
        // notify();
        openAssigneeCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteAssignee = () => {
    if (!deletingAssignee) return;
    // console.log("Delete: ", deletingAssignee);
    deleteAssigneeMutation.mutate(deletingAssignee.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setAssignees((prev) => prev.filter((a) => a.id != deletingAssignee.id));
        setDeletingAssignee(null);
        openAssigneeDeleteModal.closeModal();
      },
    });
  };

  const handleAssigneeFilters = () => {
    // console.log(assigneeFilter);
    let filteredSource = assignees;

    if (assigneeFilter.main === AssigneeFilterEnum.ALL) {
      filteredSource = assignees;
    } else {
      filteredSource = assignees.filter((a) => {
        if (
          assigneeFilter.main === AssigneeFilterEnum.ALL_DONE &&
          a.todos &&
          a.todos.length > 0 &&
          a.todos.every((t) => t.completed === true)
        ) {
          return true;
        }
        if (
          assigneeFilter.main === AssigneeFilterEnum.NOTHING_DONE &&
          a.todos &&
          a.todos.length > 0 &&
          a.todos.every((t) => t.completed == false)
        ) {
          return true;
        }

        if (
          assigneeFilter.main === AssigneeFilterEnum.DONT_HAVE_TASK &&
          a.todos?.length === 0
        ) {
          return true;
        }
      });
    }

    if (assigneeFilter.gender !== "") {
      filteredSource = filteredSource.filter(
        (a) => a.gender === assigneeFilter.gender
      );
    }

    setAssigneeFiltered(true);

    setFilteredAssignees(filteredSource);
  };

  const handleExportToPDF = () => {
    const data: Assignee[] = assigneeFiltered ? filteredAssignees : assignees;
    exportToPdf<Partial<Assignee>>(
      toAssigneeExportable(data),
      `Assignees-list-${toCalendarDate(new Date())}`
    );
  };

  const handleExportToExcel = () => {
    const data: Assignee[] = assigneeFiltered ? filteredAssignees : assignees;
    exportToExcel<Partial<Assignee>>(
      toAssigneeExportable(data),
      `Assignees-list-${toCalendarDate(new Date())}`
    );
  };

  const openCreateAssigneeModal = () => {
    openAssigneeCreateEditModal.openModal();
    setErrorMessage("");
    setEditingAssignee(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: Assignee) => {
    // console.log(row);
    setEditingAssignee(row);
    setErrorMessage("");
    // closeSidebar();
    openAssigneeCreateEditModal.openModal();
  };

  const openDeleteAssigneeModal = (row: Assignee) => {
    // console.log(row);
    setDeletingAssignee(row);
    openAssigneeDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <AssigneeSidebar
          assigneeFilter={assigneeFilter}
          setAssigneeFilter={setAssigneeFilter}
          handleCreate={openCreateAssigneeModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">{t("assignees.assigneesPageTitle")}</h3>

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

          <AssigneeDatatable
            assignees={assigneeFiltered ? filteredAssignees : assignees}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteAssigneeModal}
          />
        </Box>
      </main>

      <AssigneeModals
        openAssigneeCreateEditModal={openAssigneeCreateEditModal}
        openAssigneeDeleteModal={openAssigneeDeleteModal}
        errorMessage={errorMessage}
        assigneeFormRef={assigneeFormRef}
        onSubmitAssigneeForm={onSubmitAssigneeForm}
        addEditModalIsLoading={
          createAssigneeMutation.isPending || editAssigneeMutation.isPending
        }
        isDeleting={deleteAssigneeMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingAssignee={editingAssignee}
        triggerDelete={handleDeleteAssignee}
      />
    </>
  );
};

export default Assignees;
