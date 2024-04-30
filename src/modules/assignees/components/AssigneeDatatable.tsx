import { GridColDef } from "@mui/x-data-grid";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";
import { Assignee } from "../models/Assignee";
import { CustomModalType } from "../../../components/CustomModal/hooks/useCustomModal";

interface Props {
  assignees: Assignee[];
  assigneeCreateModal: CustomModalType;
  deleteAssigreeModal: CustomModalType;
}

const AssigneeDatatable = ({
  assignees,
  assigneeCreateModal,
  deleteAssigreeModal,
}: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone", type: "boolean" },
  ];

  return (
    <>
      <CustomDatatable<Assignee>
        rows={assignees}
        columns={columns}
        onEdit={() => assigneeCreateModal.openModal()}
        onDelete={() => deleteAssigreeModal.openModal()}
      />
    </>
  );
};

export default AssigneeDatatable;
