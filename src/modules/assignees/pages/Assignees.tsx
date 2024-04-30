import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Box, Button, CircularProgress } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import CustomModal from "../../../components/CustomModal/CustomModal";
import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import AssigneeForm from "../components/AssigneeForm";
import { Assignee } from "../models/Assignee";

const Assignees = () => {
  // const [assignees] = React.useState<Assignee[]>([]);
  const notify = () => toast("Wow so easy!");

  const assigneeCreateModal = useCustomModal();
  const deleteAssigreeModal = useCustomModal();

  const formRef = React.useRef<{ triggerSubmit: Function }>(null);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone", type: "boolean" },
  ];

  const rows: Assignee[] = [
    { id: 1, name: "Snow", email: "Jon", phone: "4545174421" },
    { id: 2, name: "Lannister", email: "Cersei", phone: "4545174421" },
    { id: 3, name: "Lannister", email: "Jaime", phone: "4545174421" },
    { id: 4, name: "Stark", email: "Arya", phone: "4545174421" },
    { id: 5, name: "Targaryen", email: "Daenerys", phone: "4545174421" },
    { id: 6, name: "Melisandre", email: "", phone: "4545174421" },
    { id: 7, name: "Clifford", email: "Ferrara", phone: "4545174421" },
    { id: 8, name: "Frances", email: "Rossini", phone: "4545174421" },
    { id: 9, name: "Roxie", email: "Harvey", phone: "4545174421" },
  ];

  const triggerSubmitForm = () => {
    formRef.current?.triggerSubmit();
  };

  const onSubmitAssigneeForm = (data: Partial<Assignee>) => {
    console.log("Data: ", data);
    notify();
  };

  return (
    <>
      <Box>
        <h3>Manage Assignees</h3>

        <Box marginBottom={5}>
          <Button
            onClick={assigneeCreateModal.openModal}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            Create new Assignee
          </Button>
        </Box>

        <CustomDatatable<Assignee>
          rows={rows}
          columns={columns}
          onEdit={() => assigneeCreateModal.openModal()}
          onDelete={() => deleteAssigreeModal.openModal()}
        />
      </Box>

      {/* Create Assignee Modal */}
      <CustomModal
        title="Create a assignee"
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
              disabled={false}
              onClick={triggerSubmitForm}
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              <CircularProgress size="20px" color="inherit" />
              &nbsp; Create
            </Button>
          </div>
        }
        isOpen={assigneeCreateModal.isOpen}
        onClose={assigneeCreateModal.closeModal}>
        <AssigneeForm ref={formRef} onSubmit={onSubmitAssigneeForm} />
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
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button>

            <Button
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              Create
            </Button>
          </div>
        }>
        <h4>Voulez-vous vraiment supprimer ?</h4>
      </CustomModal>
    </>
  );
};

export default Assignees;
