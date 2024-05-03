import { GridRenderCellParams } from "@mui/x-data-grid";
import { toCalendarDate } from "../utils";

export const DatatableCelToDateCalendar = (
  params: GridRenderCellParams,
  field: string
): string => {
  if (!params.row[field]) return "";
  return toCalendarDate(new Date(params.row[field]));
};
