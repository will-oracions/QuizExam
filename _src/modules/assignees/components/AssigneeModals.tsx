import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import AssigneeForm from "./AssigneeForm";
import { Assignee } from "../models/Assignee";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openAssigneeCreateEditModal: CustomModalType;
  openAssigneeDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  assigneeFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitAssigneeForm: (data: Partial<Assignee>) => void;
  triggerSubmitForm: () => void;
  editingAssignee?: Assignee | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const AssigneeModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit assignee
   */
  openAssigneeCreateEditModal,
  /**
   * Open modal to create or edit assignee
   */
  openAssigneeDeleteModal,
  /**
   * AssigneeForm ref,
   * connected to the submit btn in the form
   */
  assigneeFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * AssigneeForm submittion handler for creation and edition
   * called when user press the modal submit button
   */
  onSubmitAssigneeForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingAssignee,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if Assignee is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create Assignee Modal */}
      <CustomModal
        title={
          editingAssignee
            ? t("assignees.assigneeForm.editTitle")
            : t("assignees.assigneeForm.createTitle")
        }
        footer={
          <div>
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
              &nbsp; {editingAssignee ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openAssigneeCreateEditModal.isOpen}
        onClose={openAssigneeCreateEditModal.closeModal}>
        <AssigneeForm
          defaultValue={editingAssignee}
          errorMessage={errorMessage}
          ref={assigneeFormRef}
          onSubmit={onSubmitAssigneeForm}
        />
      </CustomModal>

      {/* Delete Assignee Confirm Modal */}
      <CustomModal
        isOpen={openAssigneeDeleteModal.isOpen}
        onClose={openAssigneeDeleteModal.closeModal}
        title={t("assignees.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openAssigneeDeleteModal.closeModal()}
              className="modal-action-button"
              type="submit"
              variant="outlined"
              color="primary"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button>

            <Button
              disabled={isDeleting}
              onClick={triggerDelete}
              className="modal-action-button"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              {isDeleting && <CircularProgress size="20px" color="inherit" />}
              &nbsp; {t("deleteBtnLabel")}
            </Button>
          </div>
        }>
        <h4>{t("confirmDeleteLabel")}</h4>
      </CustomModal>
    </>
  );
};

export default AssigneeModals;
