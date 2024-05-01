import { Box, Button } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeDatatable from "../components/AssigneeDatatable";
import AssigneeModals from "../components/AssigneeModals";
import useAssignees from "../hooks/useAssignees";
import useCreateAssignee from "../hooks/useCreateAssignee";
import {
  Assignee,
  AssigneeFilterEnum,
  AssigneeGenderEnum,
} from "../models/Assignee";
import Sidebar2 from "../../../components/Sidebar2";
import useUpdateAssignee from "../hooks/useUpdateAssignee";
import exportToPdf from "../../../helpers/exporter";
import useDeleteAssignee from "../hooks/useDeleteAssignee";

const Assignees = () => {
  const [assignees, setAssignees] = React.useState<Assignee[]>([]);
  const [filteredAssignees, setFilteredAssignees] = React.useState<Assignee[]>(
    []
  );
  const [editingAssignee, setEditingAssignee] = React.useState<Assignee | null>(
    null
  );
  const [deletingAssignee, setDeletingAssignee] =
    React.useState<Assignee | null>(null);

  const [mainFilter, setMainFilter] = React.useState<string>(
    String(AssigneeFilterEnum.ALL)
  );

  const [secondFilter, setSecondFilter] = React.useState<string>("");

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast("Assignee created", { type: "info", className: "app-toast" });

  const assigneeCreateModal = useCustomModal();
  const assigneeDeleteModal = useCustomModal();

  const createAssigneeMutation = useCreateAssignee();
  const editAssigneeMutation = useUpdateAssignee();
  const deleteAssigneeMutation = useDeleteAssignee();
  const getAssigneeListQuery = useAssignees();

  const formRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getAssigneeListQuery.data && setAssignees(getAssigneeListQuery.data);
  }, [getAssigneeListQuery.data]);

  React.useEffect(() => {
    handleAssigneeFilters();
  }, [mainFilter, secondFilter, assignees]);

  const triggerSubmitForm = () => {
    formRef.current?.triggerSubmit();
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
      setErrorMessage("The name already exist.");
      return;
    }

    setErrorMessage("");

    createAssigneeMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setAssignees([res as Assignee, ...assignees]);
        notify();
        assigneeCreateModal.closeModal();
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
        assigneeCreateModal.closeModal();
      },
    });
  };

  const handleDeleteAssignee = () => {
    if (!deletingAssignee) return;
    // console.log("Delete: ", deletingAssignee);
    deleteAssigneeMutation.mutate(deletingAssignee.id, {
      onSuccess: (res) => {
        console.log("Res", res);
        setAssignees((prev) => prev.filter((a) => a.id != deletingAssignee.id));
        setDeletingAssignee(null);
        assigneeDeleteModal.closeModal();
      },
    });
  };

  const handleAssigneeFilters = () => {
    switch (secondFilter) {
      case String(AssigneeGenderEnum.MAN):
        setFilteredAssignees(
          assignees.filter((a) => a.gender === AssigneeGenderEnum.MAN)
        );
        break;
      case String(AssigneeGenderEnum.WOMEN):
        setFilteredAssignees(
          assignees.filter((a) => a.gender === AssigneeGenderEnum.WOMEN)
        );
        break;

      default:
        setFilteredAssignees([]);
    }
  };

  const handleExportToPDF = () => {
    exportToPdf<Assignee>(
      filteredAssignees.length > 0 ? filteredAssignees : assignees,
      "assignees-list"
    );
  };

  const openCreateAssigneeModal = () => {
    assigneeCreateModal.openModal();
    setErrorMessage("");
  };

  const opentEditAssigeeModal = (row: Assignee) => {
    console.log(row);
    setEditingAssignee(row);
    setErrorMessage("");
    assigneeCreateModal.openModal();
  };

  const openDeleteAssigneeModal = (row: Assignee) => {
    console.log(row);
    setDeletingAssignee(row);
    assigneeDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar">
        <Sidebar2
          mainFilter={mainFilter}
          secondFilter={secondFilter}
          setMainFilter={setMainFilter}
          setSecondFilter={setSecondFilter}
          handleCreate={openCreateAssigneeModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">Manage Assignees</h3>

          <Box marginBottom={2} display="flex" justifyContent="flex-end">
            <Button
              onClick={handleExportToPDF}
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              Export to PDF
            </Button>
          </Box>

          <AssigneeDatatable
            assignees={
              filteredAssignees.length > 0 ? filteredAssignees : assignees
            }
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteAssigneeModal}
          />
        </Box>
      </main>

      <AssigneeModals
        assigneeCreateModal={assigneeCreateModal}
        assigneeDeleteModal={assigneeDeleteModal}
        errorMessage={errorMessage}
        formRef={formRef}
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
