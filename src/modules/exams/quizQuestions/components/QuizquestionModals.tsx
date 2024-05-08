import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../../components/CustomModal/CustomModal";
import QuizquestionForm from "./QuizquestionForm";
import { Quizquestion } from "../models/Quizquestion";
import { CustomModalType } from "../../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openQuizquestionCreateEditModal: CustomModalType;
  openQuizquestionDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  quizQuestionFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitQuizquestionForm: (data: Partial<Quizquestion>) => void;
  triggerSubmitForm: () => void;
  editingQuizquestion?: Quizquestion | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const QuizquestionModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit quizQuestion
   */
  openQuizquestionCreateEditModal,
  /**
   * Open modal to create or edit quizQuestion
   */
  openQuizquestionDeleteModal,
  /**
   * QuizquestionForm ref,
   * connected to the submit btn in the form
   */
  quizQuestionFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * QuizquestionForm submittion handler for creation and edition
   * called when quizQuestion press the modal submit button
   */
  onSubmitQuizquestionForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingQuizquestion,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if Quizquestion is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create Quizquestion Modal */}
      <CustomModal
        title={
          editingQuizquestion
            ? t("quizQuestions.quizQuestionForm.editTitle")
            : t("quizQuestions.quizQuestionForm.createTitle")
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
              &nbsp; {editingQuizquestion ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openQuizquestionCreateEditModal.isOpen}
        onClose={openQuizquestionCreateEditModal.closeModal}>
        <QuizquestionForm
          defaultValue={editingQuizquestion}
          errorMessage={errorMessage}
          ref={quizQuestionFormRef}
          onSubmit={onSubmitQuizquestionForm}
        />
      </CustomModal>

      {/* Delete Quizquestion Confirm Modal */}
      <CustomModal
        isOpen={openQuizquestionDeleteModal.isOpen}
        onClose={openQuizquestionDeleteModal.closeModal}
        title={t("quizQuestions.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openQuizquestionDeleteModal.closeModal()}
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

export default QuizquestionModals;
