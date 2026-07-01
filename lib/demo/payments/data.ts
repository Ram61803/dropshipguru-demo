export type PaymentStatus = "completed" | "pending" | "scheduled";

export type DemoPayment = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: PaymentStatus;
  type: "disbursement" | "fee" | "refund" | "reserve";
};

export const DEMO_PAYMENTS: DemoPayment[] = [
  { id: "pay-1", date: "Mar 1, 2026", description: "Standard disbursement", amount: 88516.64, status: "scheduled", type: "disbursement" },
  { id: "pay-2", date: "Feb 22, 2026", description: "Standard disbursement", amount: 72430.18, status: "completed", type: "disbursement" },
  { id: "pay-3", date: "Feb 15, 2026", description: "FBA fulfillment fees", amount: -8420.55, status: "completed", type: "fee" },
  { id: "pay-4", date: "Feb 8, 2026", description: "Standard disbursement", amount: 65890.42, status: "completed", type: "disbursement" },
  { id: "pay-5", date: "Feb 3, 2026", description: "Customer refund — LJ-ER-068", amount: -1499, status: "completed", type: "refund" },
  { id: "pay-6", date: "Jan 25, 2026", description: "Reserve hold release", amount: 12400, status: "completed", type: "reserve" },
  { id: "pay-7", date: "Jan 18, 2026", description: "Advertising charges", amount: -5306.46, status: "completed", type: "fee" },
  { id: "pay-8", date: "Jan 11, 2026", description: "Standard disbursement", amount: 91204.33, status: "completed", type: "disbursement" },
];

export function getPayments() {
  return DEMO_PAYMENTS;
}

export function getPaymentSummary() {
  const completed = DEMO_PAYMENTS.filter((p) => p.status === "completed");
  return {
    totalBalance: 88516.64,
    scheduledDisbursement: 88516.64,
    lastDisbursement: 72430.18,
    fees30d: Math.abs(completed.filter((p) => p.type === "fee").reduce((s, p) => s + p.amount, 0)),
    refunds30d: Math.abs(completed.filter((p) => p.type === "refund").reduce((s, p) => s + p.amount, 0)),
  };
}
