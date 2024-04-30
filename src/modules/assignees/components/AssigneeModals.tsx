import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import AssigneeForm from "./AssigneeForm";
import { UseMutationResult } from "@tanstack/react-query";
import { Assignee } from "../models/Assignee";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";

interface Props {
  assigneeCreateModal: CustomModalType;
  deleteAssigreeModal: CustomModalType;
  createMutation: UseMutationResult<
    Partial<Assignee>,
    Error,
    Partial<Assignee>,
    unknown
  >;
  errorMessage: string;
  formRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitAssigneeForm: (data: Partial<Assignee>) => void;
  triggerSubmitForm: () => void;
}

const AssigneeModals = ({
  createMutation,
  triggerSubmitForm,
  assigneeCreateModal,
  deleteAssigreeModal,
  formRef,
  errorMessage,
  onSubmitAssigneeForm,
}: Props) => {
  return (
    <>
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
        <AssigneeForm
          errorMessage={errorMessage}
          ref={formRef}
          onSubmit={onSubmitAssigneeForm}
        />
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
              variant="outlined"
              color="primary"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button>

            <Button
              className="modal-action-button"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              Delete
            </Button>
          </div>
        }>
        <h4>Voulez-vous vraiment supprimer ?</h4>
      </CustomModal>
    </>
  );
};

export default AssigneeModals;
