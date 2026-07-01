export type DemoReport = {
  id: string;
  name: string;
  category: string;
  lastGenerated: string;
  format: "CSV" | "TSV" | "PDF";
};

export const DEMO_REPORTS: DemoReport[] = [
  { id: "rep-1", name: "All Orders Report", category: "Orders", lastGenerated: "Today, 9:12 AM", format: "CSV" },
  { id: "rep-2", name: "FBA Inventory Report", category: "Inventory", lastGenerated: "Today, 8:45 AM", format: "CSV" },
  { id: "rep-3", name: "Settlement Report", category: "Payments", lastGenerated: "Yesterday", format: "TSV" },
  { id: "rep-4", name: "Business Reports — Detail Page Sales", category: "Sales", lastGenerated: "Feb 28, 2026", format: "CSV" },
  { id: "rep-5", name: "Stranded Inventory Report", category: "Inventory", lastGenerated: "Feb 27, 2026", format: "CSV" },
  { id: "rep-6", name: "Restock Inventory Report", category: "Inventory", lastGenerated: "Feb 26, 2026", format: "CSV" },
  { id: "rep-7", name: "Fee Preview Report", category: "Payments", lastGenerated: "Feb 25, 2026", format: "PDF" },
  { id: "rep-8", name: "Brand Analytics Search Terms", category: "Advertising", lastGenerated: "Feb 24, 2026", format: "CSV" },
];

export function getReports() {
  return DEMO_REPORTS;
}
