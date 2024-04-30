import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import AssigneeForm from "./AssigneeForm";
import { Assignee } from "../models/Assignee";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";

interface Props {
  assigneeCreateModal: CustomModalType;
  assigneeDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  formRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitAssigneeForm: (data: Partial<Assignee>) => void;
  triggerSubmitForm: () => void;
  editingAssignee?: Assignee | null;
}

const AssigneeModals = ({
  addEditModalIsLoading,
  triggerSubmitForm,
  assigneeCreateModal,
  assigneeDeleteModal,
  formRef,
  errorMessage,
  onSubmitAssigneeForm,
  editingAssignee,
}: Props) => {
  return (
    <>
      {/* Create Assignee Modal */}
      <CustomModal
        title={(editingAssignee ? "Edit" : "Create new") + " Assignee"}
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
              disabled={addEditModalIsLoading}
              onClick={triggerSubmitForm}
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              {addEditModalIsLoading && (
                <CircularProgress size="20px" color="inherit" />
              )}
              &nbsp; {editingAssignee ? "Edit" : "Create"}
            </Button>
          </div>
        }
        isOpen={assigneeCreateModal.isOpen}
        onClose={assigneeCreateModal.closeModal}>
        <AssigneeForm
          defaultValue={editingAssignee}
          errorMessage={errorMessage}
          ref={formRef}
          onSubmit={onSubmitAssigneeForm}
        />
      </CustomModal>

      {/* Delete Assignee Confirm Modal */}
      <CustomModal
        isOpen={assigneeDeleteModal.isOpen}
        onClose={assigneeDeleteModal.closeModal}
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
