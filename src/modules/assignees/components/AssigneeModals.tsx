import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import AssigneeForm from "./AssigneeForm";
import { Assignee } from "../models/Assignee";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  assigneeCreateModal: CustomModalType;
  assigneeDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  formRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitAssigneeForm: (data: Partial<Assignee>) => void;
  triggerSubmitForm: () => void;
  editingAssignee?: Assignee | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
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
  triggerDelete,
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
              &nbsp; {editingAssignee ? t("edit") : t("create")}
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
        title={t("assignees.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => assigneeDeleteModal.closeModal()}
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
