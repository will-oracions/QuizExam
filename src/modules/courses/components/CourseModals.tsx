import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import CourseForm from "./CourseForm";
import { Course } from "../models/Course";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  openCourseCreateEditModal: CustomModalType;
  openCourseDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  courseFormRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitCourseForm: (data: Partial<Course>) => void;
  triggerSubmitForm: () => void;
  editingCourse?: Course | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
}

const CourseModals = ({
  /**
   * Manage the form loading state
   */
  addEditModalIsLoading,
  /**
   * Trigger form submittion from the modal
   */
  triggerSubmitForm,
  /**
   * Open modal to create or edit course
   */
  openCourseCreateEditModal,
  /**
   * Open modal to create or edit course
   */
  openCourseDeleteModal,
  /**
   * CourseForm ref,
   * connected to the submit btn in the form
   */
  courseFormRef,
  /**
   * Server message error to display in the modal
   * when the request failed
   */
  errorMessage,
  /**
   * CourseForm submittion handler for creation and edition
   * called when course press the modal submit button
   */
  onSubmitCourseForm,
  /**
   * Boolean that tell if we do open the form for edition or for creation
   */
  editingCourse,
  /**
   * Trigger delete button
   */
  triggerDelete,
  /**
   * Boolean that tell if Course is deleting
   */
  isDeleting,
}: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Create Course Modal */}
      <CustomModal
        title={
          editingCourse
            ? t("courses.courseForm.editTitle")
            : t("courses.courseForm.createTitle")
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
              &nbsp; {editingCourse ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={openCourseCreateEditModal.isOpen}
        onClose={openCourseCreateEditModal.closeModal}>
        <CourseForm
          defaultValue={editingCourse}
          errorMessage={errorMessage}
          ref={courseFormRef}
          onSubmit={onSubmitCourseForm}
        />
      </CustomModal>

      {/* Delete Course Confirm Modal */}
      <CustomModal
        isOpen={openCourseDeleteModal.isOpen}
        onClose={openCourseDeleteModal.closeModal}
        title={t("courses.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => openCourseDeleteModal.closeModal()}
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

export default CourseModals;
