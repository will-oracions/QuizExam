import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../../components/CustomModal/CustomModal";
import QuizForm from "./QuizForm";
import { Quiz } from "../models/Quiz";
import { CustomModalType } from "../../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openQuizCreateEditModal: CustomModalType;
  openQuizDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  quizFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitQuizForm: (data: Partial<Quiz>) => void;
  triggerSubmitForm: () => void;
  editingQuiz?: Quiz | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const QuizModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit quiz
   */
  openQuizCreateEditModal,
  /**
   * Open modal to create or edit quiz
   */
  openQuizDeleteModal,
  /**
   * QuizForm ref,
   * connected to the submit btn in the form
   */
  quizFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * QuizForm submittion handler for creation and edition
   * called when quiz press the modal submit button
   */
  onSubmitQuizForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingQuiz,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if Quiz is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create Quiz Modal */}
      <CustomModal
        title={
          editingQuiz
            ? t("quizs.quizForm.editTitle")
            : t("quizs.quizForm.createTitle")
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
              &nbsp; {editingQuiz ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openQuizCreateEditModal.isOpen}
        onClose={openQuizCreateEditModal.closeModal}>
        <QuizForm
          defaultValue={editingQuiz}
          errorMessage={errorMessage}
          ref={quizFormRef}
          onSubmit={onSubmitQuizForm}
        />
      </CustomModal>

      {/* Delete Quiz Confirm Modal */}
      <CustomModal
        isOpen={openQuizDeleteModal.isOpen}
        onClose={openQuizDeleteModal.closeModal}
        title={t("quizs.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openQuizDeleteModal.closeModal()}
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

export default QuizModals;
