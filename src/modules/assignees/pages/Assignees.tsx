import React from "react";
import { toast } from "react-toastify";
import { Box, Button, CircularProgress } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import CustomModal from "../../../components/CustomModal/CustomModal";
import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeForm from "../components/AssigneeForm";
import { Assignee } from "../models/Assignee";
import useCreateAssignee from "../hooks/useCreateAssignee";
import useAssignees from "../hooks/useAssignees";

const Assignees = () => {
  const [assignees, setAssignees] = React.useState<Assignee[]>([]);

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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone", type: "boolean" },
  ];

  const triggerSubmitForm = () => {
    formRef.current?.triggerSubmit();
  };

  const onSubmitAssigneeForm = (data: Partial<Assignee>) => {
    // console.log("Data: ", data);

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
            onClick={assigneeCreateModal.openModal}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            Create new Assignee
          </Button>
        </Box>

        <CustomDatatable<Assignee>
          rows={assignees}
          columns={columns}
          onEdit={() => assigneeCreateModal.openModal()}
          onDelete={() => deleteAssigreeModal.openModal()}
        />
      </Box>

      {/* Create Assignee Modal */}
      <CustomModal
        title="Create new Assignee"
        footer={
          <div>
            {/* <Button
              className="modal-action-button"
              type="submit"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button> */}

            <Button
              disabled={createMutation.isPending}
              onClick={triggerSubmitForm}
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              {createMutation.isPending && (
                <CircularProgress size="20px" color="inherit" />
              )}
              &nbsp; Create
            </Button>
          </div>
        }
        isOpen={assigneeCreateModal.isOpen}
        onClose={assigneeCreateModal.closeModal}>
        <AssigneeForm ref={formRef} onSubmit={onSubmitAssigneeForm} />
      </CustomModal>

      {/* Delete Assignee Confirm Modal */}
      <CustomModal
        isOpen={deleteAssigreeModal.isOpen}
        onClose={deleteAssigreeModal.closeModal}
        title="Delete Assignee"
        footer={
          <div>
            <Button
              className="modal-action-button"
              type="submit"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button>

            <Button
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              Create
            </Button>
          </div>
        }>
        <h4>Voulez-vous vraiment supprimer ?</h4>
      </CustomModal>
    </>
  );
};

export default Assignees;
