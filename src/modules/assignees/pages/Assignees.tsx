import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeDatatable from "../components/AssigneeDatatable";
import AssigneeModals from "../components/AssigneeModals";
import useAssignees from "../hooks/useAssignees";
import useCreateAssignee from "../hooks/useCreateAssignee";
import { Assignee } from "../models/Assignee";

const Assignees = () => {
  const [assignees, setAssignees] = React.useState<Assignee[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast("Assignee created", { type: "info", className: "app-toast" });

  const assigneeCreateModal = useCustomModal();
  const deleteAssigreeModal = useCustomModal();

  const createMutation = useCreateAssignee();
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

  return (
    <>
      <Box>
        <h3>Manage Assignees</h3>

        <Box marginBottom={5}>
          <Button
            onClick={() => {
              assigneeCreateModal.openModal();
              setErrorMessage("");
            }}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            Create new Assignee
          </Button>
        </Box>

        <AssigneeDatatable
          assignees={assignees}
          assigneeCreateModal={assigneeCreateModal}
          deleteAssigreeModal={deleteAssigreeModal}
        />
      </Box>

      <AssigneeModals
        assigneeCreateModal={assigneeCreateModal}
        deleteAssigreeModal={deleteAssigreeModal}
        errorMessage={errorMessage}
        formRef={formRef}
        onSubmitAssigneeForm={onSubmitAssigneeForm}
        createMutation={createMutation}
        triggerSubmitForm={triggerSubmitForm}
      />
    </>
  );
};

export default Assignees;
