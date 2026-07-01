import type { SellerCategoryId } from "@/types/seller";

export type DashboardKPIs = {
  todaysSales: number;
  todaysSalesChange: number;
  totalOrders: number;
  totalOrdersChange: number;
  totalRevenue: number;
  totalRevenueChange: number;
  pendingOrders: number;
  returnOrders: number;
  conversionRate: number;
  conversionRateChange: number;
};

export type DailyTrendPoint = {
  date: string;
  day: number;
  sales: number;
  revenue: number;
  orders: number;
};

export type RevenueBreakdownItem = {
  name: string;
  value: number;
  color: string;
};

export type CategoryPerformanceItem = {
  name: string;
  sales: number;
  fill: string;
};

export type InventoryAlert = {
  id: string;
  product: string;
  sku: string;
  message: string;
  severity: "critical" | "warning" | "info";
};

export type LowStockItem = {
  id: string;
  product: string;
  sku: string;
  stock: number;
  threshold: number;
  imageSeed: string;
};

export type RecentOrder = {
  id: string;
  orderNumber: string;
  customer: string;
  product: string;
  amount: number;
  status: "pending" | "shipped" | "delivered" | "returned";
  timeAgo: string;
  imageSeed: string;
};

export type DashboardNotification = {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  type: "order" | "inventory" | "payment" | "system";
};

export type ActivityTimelineItem = {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  type: "order" | "inventory" | "listing" | "return" | "payment";
};

export type DashboardData = {
  lastUpdated: string;
  kpis: DashboardKPIs;
  dailyTrend: DailyTrendPoint[];
  revenueBreakdown: RevenueBreakdownItem[];
  categoryPerformance: CategoryPerformanceItem[];
  inventoryAlerts: InventoryAlert[];
  lowStock: LowStockItem[];
  recentOrders: RecentOrder[];
  notifications: DashboardNotification[];
  activityTimeline: ActivityTimelineItem[];
};

export type DashboardDataMap = Record<SellerCategoryId, DashboardData>;
