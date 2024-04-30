import { Box } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeDatatable from "../components/AssigneeDatatable";
import AssigneeModals from "../components/AssigneeModals";
import useAssignees from "../hooks/useAssignees";
import useCreateAssignee from "../hooks/useCreateAssignee";
import { Assignee } from "../models/Assignee";
import Sidebar2 from "../../../components/Sidebar2";
import useUpdateAssignee from "../hooks/useUpdateAssignee";

const Assignees = () => {
  const [assignees, setAssignees] = React.useState<Assignee[]>([]);
  const [editingAssignee, setEditingAssignee] = React.useState<Assignee | null>(
    null
  );
  const [deletingAssignee, setDeletingAssignee] =
    React.useState<Assignee | null>(null);

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast("Assignee created", { type: "info", className: "app-toast" });

  const assigneeCreateModal = useCustomModal();
  const assigneeDeleteModal = useCustomModal();

  const createMutation = useCreateAssignee();
  const editMutation = useUpdateAssignee();
  const getListQuery = useAssignees();

  const formRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getListQuery.data && setAssignees(getListQuery.data);
  }, [getListQuery.data]);

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

    createMutation.mutate(data, {
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

    editMutation.mutate(data as Assignee, {
      onSuccess: (res) => {
        console.log("Response: ", res);

        setAssignees(assignees.map((a) => (a.id === res.id ? res : a)));
        // notify();
        assigneeCreateModal.closeModal();
      },
    });
  };

  const handleCreateAssignee = () => {
    assigneeCreateModal.openModal();
    setErrorMessage("");
  };

  const handleEditAssigee = (row: Assignee) => {
    console.log(row);
    setEditingAssignee(row);
    setErrorMessage("");
    assigneeCreateModal.openModal();
  };

  const handleDeleteAssignee = (row: Assignee) => {
    console.log(row);
    assigneeDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar">
        <Sidebar2 handleCreate={handleCreateAssignee} />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">Manage Assignees</h3>

          <AssigneeDatatable
            assignees={assignees}
            handleEdit={handleEditAssigee}
            handleDelete={handleDeleteAssignee}
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
          createMutation.isPending || editMutation.isPending
        }
        triggerSubmitForm={triggerSubmitForm}
        editingAssignee={editingAssignee}
      />
    </>
  );
};

export default Assignees;
