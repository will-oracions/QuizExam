import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./CustomDatatable.scss";

interface Props<TRow> {
  rows: TRow[];
  columns: GridColDef[];
  onEdit?: (row: TRow) => void;
  onDelete?: (row: TRow) => void;
}

const CustomDatatable = <TRow extends Record<string, any>>({
  rows,
  columns,
  onEdit,
  onDelete,
}: Props<TRow>) => {
  const actionColumns: GridColDef[] =
    !onEdit && !onDelete
      ? []
      : [
          {
            field: "action",
            headerName: "Action",
            sortable: false,
            width: 150,
            renderCell: (params) => (
              <div>
                {onEdit && (
                  <button
                    className="app-icon-button"
                    onClick={() => onEdit(params.row)}>
                    <EditIcon color="primary" />
                  </button>
                )}

                {onDelete && (
                  <button
                    className="app-icon-button"
                    onClick={() => onDelete(params.row)}>
                    <DeleteIcon color="error" />
                  </button>
                )}
              </div>
            ),
          },
        ];

  const columnsWithActions = [...columns, ...actionColumns];

  return (
    <div className="app-datatable">
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columnsWithActions}
        initialState={{
          // ...data.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default CustomDatatable;
