import { DataGrid, GridColDef, GridLocaleText } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./CustomDatatable.scss";

interface Props<TRow> {
  rows: TRow[];
  columns: GridColDef[];
  onEdit?: (row: TRow) => void;
  onDelete?: (row: TRow) => void;
  localeText?: Partial<GridLocaleText>;
}

/**
 * MUI dynamic configurable datatable, can display any type of data
 * @param param0
 * @returns
 * @author will-oracions <oracions.dev@gmail.com>
 */
const CustomDatatable = <TRow extends Record<string, any>>({
  /**
   * Array of data of type TRow
   */
  rows,
  /**
   * Table column header
   */
  columns,
  /**
   * Action to execute when user click the edit button on the table
   */
  onEdit,
  /**
   *  Action to execute when user click the delete button on the table
   */
  onDelete,
  /**
   * Table label text, for translation
   */
  localeText,
}: Props<TRow>) => {
  /**
   * Template for Edit and Delete buttons
   * it's optional
   */
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
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        localeText={localeText}
      />
    </div>
  );
};

export default CustomDatatable;
