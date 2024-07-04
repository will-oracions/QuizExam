import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

export default function exportToPdf<T extends Record<string, any>>(
  data: T[],
  name: string
) {
  const doc = new jsPDF();
  const columns = Object.keys(data[0]);
  const rows = data.map((row) => Object.values(row));
  // @ts-ignore
  doc.autoTable({
    head: [columns],
    body: rows,
  });
  doc.save(`${name}.pdf`);
}

export const exportToExcel = <T>(data: T[], name: string) => {
  const sheet = XLSX.utils.json_to_sheet(data);
  const book = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, sheet, "Sheet 1");
  XLSX.writeFile(book, name + ".xlsx");
};
