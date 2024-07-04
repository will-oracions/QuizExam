import { GridRenderCellParams } from "@mui/x-data-grid";
import { toCalendarDate } from "../utils";

/**
 * Convert date field to dd-mm-yyyy format to display
 * in the datatable
 * @param params
 * @param field the key of the date in the datatable
 * @returns the template with de formated date
 */
export const DatatableCelToDateCalendar = (
  params: GridRenderCellParams,
  field: string
): string => {
  if (!params.row[field]) return "";
  return toCalendarDate(new Date(params.row[field]));
};
