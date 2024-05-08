import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../../components/CustomModal/CustomModal";
import QuizanswerForm from "./QuizanswerForm";
import { Quizanswer } from "../models/Quizanswer";
import { CustomModalType } from "../../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openQuizanswerCreateEditModal: CustomModalType;
  openQuizanswerDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  quizAnswerFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitQuizanswerForm: (data: Partial<Quizanswer>) => void;
  triggerSubmitForm: () => void;
  editingQuizanswer?: Quizanswer | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const QuizanswerModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit quizAnswer
   */
  openQuizanswerCreateEditModal,
  /**
   * Open modal to create or edit quizAnswer
   */
  openQuizanswerDeleteModal,
  /**
   * QuizanswerForm ref,
   * connected to the submit btn in the form
   */
  quizAnswerFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * QuizanswerForm submittion handler for creation and edition
   * called when quizAnswer press the modal submit button
   */
  onSubmitQuizanswerForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingQuizanswer,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if Quizanswer is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create Quizanswer Modal */}
      <CustomModal
        title={
          editingQuizanswer
            ? t("quizAnswers.quizAnswerForm.editTitle")
            : t("quizAnswers.quizAnswerForm.createTitle")
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
              &nbsp; {editingQuizanswer ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openQuizanswerCreateEditModal.isOpen}
        onClose={openQuizanswerCreateEditModal.closeModal}>
        <QuizanswerForm
          defaultValue={editingQuizanswer}
          errorMessage={errorMessage}
          ref={quizAnswerFormRef}
          onSubmit={onSubmitQuizanswerForm}
        />
      </CustomModal>

      {/* Delete Quizanswer Confirm Modal */}
      <CustomModal
        isOpen={openQuizanswerDeleteModal.isOpen}
        onClose={openQuizanswerDeleteModal.closeModal}
        title={t("quizAnswers.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openQuizanswerDeleteModal.closeModal()}
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

export default QuizanswerModals;
