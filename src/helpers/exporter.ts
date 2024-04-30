import jsPDF from "jspdf";
import "jspdf-autotable";

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
