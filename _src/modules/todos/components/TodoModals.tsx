import { Button, CircularProgress } from "@mui/material";
import CustomModal from "../../../components/CustomModal/CustomModal";
import TodoForm, { AssigneeAutoCompleteType } from "./TodoForm";
import { Todo } from "../models/Todo";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  todoCreateModal: CustomModalType;
  todoDeleteModal: CustomModalType;
  addEditModalIsLoading?: boolean;
  errorMessage: string;
  formRef: RefObject<{ triggerSubmit: Function }>;
  onSubmitTodoForm: (data: Partial<Todo>) => void;
  triggerSubmitForm: () => void;
  editingTodo?: Todo | null;
  triggerDelete: () => void;
  isDeleting?: boolean;
  assignees: AssigneeAutoCompleteType[];
}

const TodoModals = ({
  addEditModalIsLoading,
  triggerSubmitForm,
  todoCreateModal,
  todoDeleteModal,
  formRef,
  errorMessage,
  onSubmitTodoForm,
  editingTodo,
  triggerDelete,
  isDeleting,
  assignees,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Create Todo Modal */}
      <CustomModal
        title={t("todos.createTodoForm.createTodoTitle")}
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
              &nbsp; {editingTodo ? t("edit") : t("create")}
            </Button>
          </div>
        }
        isOpen={todoCreateModal.isOpen}
        onClose={todoCreateModal.closeModal}>
        <TodoForm
          defaultValue={editingTodo}
          errorMessage={errorMessage}
          ref={formRef}
          onSubmit={onSubmitTodoForm}
          assignees={assignees}
        />
      </CustomModal>

      {/* Delete Todo Confirm Modal */}
      <CustomModal
        isOpen={todoDeleteModal.isOpen}
        onClose={todoDeleteModal.closeModal}
        title={t("todos.deleteTitle")}
        footer={
          <div>
            <Button
              onClick={() => todoDeleteModal.closeModal()}
              className="modal-action-button"
              type="submit"
              variant="outlined"
              color="primary"
              style={{ marginTop: "10px" }}>
              {t("cancelBtnLabel")}
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

export default TodoModals;
