import { UPLOADED_PRODUCT_CATALOG } from "@/lib/demo/products/catalog";

export type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled" | "returned";

export type DemoOrder = {
  id: string;
  orderNumber: string;
  productId: string;
  productName: string;
  productSku: string;
  productImageUrl: string;
  categoryLabel: string;
  customer: string;
  quantity: number;
  amount: number;
  status: OrderStatus;
  fulfillment: "FBA" | "FBM";
  placedAt: string;
  shipBy: string;
};

const CUSTOMERS = [
  "Priya S.",
  "Rahul M.",
  "Ananya K.",
  "Vikram P.",
  "Sneha R.",
  "Arjun D.",
  "Meera T.",
  "Karan J.",
  "Divya N.",
  "Rohan B.",
];

const STATUSES: OrderStatus[] = ["pending", "shipped", "delivered", "cancelled", "returned"];
const TIMES = [
  "12 min ago",
  "28 min ago",
  "1 hr ago",
  "2 hr ago",
  "3 hr ago",
  "5 hr ago",
  "Yesterday",
  "2 days ago",
];

export const DEMO_ORDERS: DemoOrder[] = UPLOADED_PRODUCT_CATALOG.flatMap((product, index) => {
  const baseOrderNumber = 114_8829000 + index * 17;
  return [
    {
      id: `ord-${product.id}-1`,
      orderNumber: `${baseOrderNumber}`,
      productId: product.id,
      productName: product.name,
      productSku: product.sku,
      productImageUrl: product.imageUrl,
      categoryLabel: product.categoryLabel,
      customer: CUSTOMERS[index % CUSTOMERS.length],
      quantity: (index % 3) + 1,
      amount: product.price * ((index % 3) + 1),
      status: STATUSES[index % STATUSES.length],
      fulfillment: product.fulfillment,
      placedAt: TIMES[index % TIMES.length],
      shipBy: index % 4 === 0 ? "Today" : "Tomorrow",
    },
    ...(index % 2 === 0
      ? [
          {
            id: `ord-${product.id}-2`,
            orderNumber: `${baseOrderNumber + 3}`,
            productId: product.id,
            productName: product.name,
            productSku: product.sku,
            productImageUrl: product.imageUrl,
            categoryLabel: product.categoryLabel,
            customer: CUSTOMERS[(index + 3) % CUSTOMERS.length],
            quantity: 1,
            amount: product.price,
            status: "shipped" as const,
            fulfillment: product.fulfillment,
            placedAt: TIMES[(index + 2) % TIMES.length],
            shipBy: "Shipped",
          },
        ]
      : []),
  ];
});

export function getOrders() {
  return DEMO_ORDERS;
}

export function getOrderById(id: string) {
  return DEMO_ORDERS.find((order) => order.id === id);
}

export function getOrderSummary() {
  const orders = DEMO_ORDERS;
  return {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    revenue: orders.reduce((sum, o) => sum + o.amount, 0),
  };
}
