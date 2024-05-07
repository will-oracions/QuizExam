import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import UserForm from "./UserForm";
import { User } from "../models/User";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openUserCreateEditModal: CustomModalType;
  openUserDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  userFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitUserForm: (data: Partial<User>) => void;
  triggerSubmitForm: () => void;
  editingUser?: User | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const UserModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit user
   */
  openUserCreateEditModal,
  /**
   * Open modal to create or edit user
   */
  openUserDeleteModal,
  /**
   * UserForm ref,
   * connected to the submit btn in the form
   */
  userFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * UserForm submittion handler for creation and edition
   * called when user press the modal submit button
   */
  onSubmitUserForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingUser,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if User is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create User Modal */}
      <CustomModal
        title={
          editingUser
            ? t("users.userForm.editTitle")
            : t("users.userForm.createTitle")
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
              &nbsp; {editingUser ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openUserCreateEditModal.isOpen}
        onClose={openUserCreateEditModal.closeModal}>
        <UserForm
          defaultValue={editingUser}
          errorMessage={errorMessage}
          ref={userFormRef}
          onSubmit={onSubmitUserForm}
        />
      </CustomModal>

      {/* Delete User Confirm Modal */}
      <CustomModal
        isOpen={openUserDeleteModal.isOpen}
        onClose={openUserDeleteModal.closeModal}
        title={t("users.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openUserDeleteModal.closeModal()}
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

export default UserModals;
