export const FLIPKART_SELLER = {
  storeName: "UrbanCraft India",
  sellerId: "FK-SL-928471",
  email: "seller@urbancraft.demo.flipkart",
  phone: "+91 99887 76655",
  gstin: "27AABCU9603R1ZM",
  warehouse: "Flipkart Fulfillment — Mumbai Bhiwandi",
  tier: "Gold Seller",
  rating: 4.6,
};

export type FlipkartProduct = {
  id: string;
  fsn: string;
  sku: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  mrp: number;
  stock: number;
  status: "active" | "inactive" | "out_of_stock" | "pending_qc";
  imageUrl: string;
  description: string;
  views7d: number;
  orders7d: number;
  returnRate: number;
  fulfillment: "FBF" | "Easy Ship" | "Self Ship";
  lastUpdated: string;
};

export const FLIPKART_PRODUCTS: FlipkartProduct[] = [
  {
    id: "fk-p1",
    fsn: "BAGFH8K2LM",
    sku: "UC-BP-SKY-001",
    title: "TELGO Travel Backpack — Sky Blue | Laptop Compartment",
    category: "Bags & Luggage",
    brand: "TELGO",
    price: 999,
    mrp: 2499,
    stock: 142,
    status: "active",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg.jfif",
    description: "Premium travel backpack with padded laptop sleeve, USB charging port, and water-resistant fabric.",
    views7d: 8420,
    orders7d: 86,
    returnRate: 2.1,
    fulfillment: "FBF",
    lastUpdated: "2 hr ago",
  },
  {
    id: "fk-p2",
    fsn: "HBFJ3N9PQR",
    sku: "UC-HB-TAN-002",
    title: "Classic Leather Handbag — Tan | Crossbody Strap",
    category: "Handbags",
    brand: "UrbanCraft",
    price: 1299,
    mrp: 3499,
    stock: 64,
    status: "active",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag.jpg.png",
    description: "Genuine-look leather handbag with detachable crossbody strap and multiple compartments.",
    views7d: 6210,
    orders7d: 52,
    returnRate: 3.4,
    fulfillment: "Easy Ship",
    lastUpdated: "45 min ago",
  },
  {
    id: "fk-p3",
    fsn: "HDVK5W1XYZ",
    sku: "UC-VD-SET-003",
    title: "Artificial Wooden Flower Vase | Home Decor Showpiece",
    category: "Home Decor",
    brand: "UrbanCraft",
    price: 578,
    mrp: 1299,
    stock: 28,
    status: "active",
    imageUrl: "/products/home%20decor/Vases.jpg.jpg",
    description: "Elegant wooden-finish vase for living room, dining table, and gifting.",
    views7d: 3840,
    orders7d: 41,
    returnRate: 1.8,
    fulfillment: "FBF",
    lastUpdated: "1 hr ago",
  },
  {
    id: "fk-p4",
    fsn: "JWLK8M2ABC",
    sku: "UC-JW-GLD-004",
    title: "Gold-Plated Statement Necklace Set | Party Wear",
    category: "Jewellery",
    brand: "SparkleLane",
    price: 449,
    mrp: 1999,
    stock: 0,
    status: "out_of_stock",
    imageUrl: "/products/Jewellery/LJ113.jpg.jpg",
    description: "Anti-tarnish gold-plated necklace with matching earrings for festive occasions.",
    views7d: 5120,
    orders7d: 0,
    returnRate: 4.2,
    fulfillment: "Easy Ship",
    lastUpdated: "3 hr ago",
  },
  {
    id: "fk-p5",
    fsn: "DCOR9P4LMN",
    sku: "UC-DC-WAL-005",
    title: "Minimalist Wall Art Frame Set of 3 | Modern Decor",
    category: "Home Decor",
    brand: "UrbanCraft",
    price: 899,
    mrp: 2199,
    stock: 95,
    status: "active",
    imageUrl: "/products/home%20decor/Homedecor.jpg.jpg",
    description: "Contemporary wall art frames for bedroom and living room styling.",
    views7d: 2980,
    orders7d: 24,
    returnRate: 2.5,
    fulfillment: "FBF",
    lastUpdated: "5 hr ago",
  },
  {
    id: "fk-p6",
    fsn: "BAGP2K7RST",
    sku: "UC-BP-OLV-006",
    title: "TELGO Daypack — Olive Green | Hiking & Commute",
    category: "Bags & Luggage",
    brand: "TELGO",
    price: 849,
    mrp: 1899,
    stock: 18,
    status: "active",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg%20(3).jfif",
    description: "Lightweight daypack with ventilated back panel for outdoor and daily use.",
    views7d: 1940,
    orders7d: 19,
    returnRate: 1.5,
    fulfillment: "Self Ship",
    lastUpdated: "6 hr ago",
  },
];

export type FlipkartOrderStatus =
  | "new"
  | "packed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "return_requested";

export type FlipkartOrder = {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  amount: number;
  status: FlipkartOrderStatus;
  orderDate: string;
  customerCity: string;
  fulfillment: string;
  paymentMode: string;
};

export const FLIPKART_ORDERS: FlipkartOrder[] = [
  {
    id: "fk-o1",
    orderId: "OD4287193847291",
    productId: "fk-p1",
    productName: "TELGO Travel Backpack — Sky Blue",
    sku: "UC-BP-SKY-001",
    quantity: 1,
    amount: 999,
    status: "new",
    orderDate: "01 Mar 2026, 09:42 AM",
    customerCity: "Pune",
    fulfillment: "FBF",
    paymentMode: "Prepaid",
  },
  {
    id: "fk-o2",
    orderId: "OD4287193847102",
    productId: "fk-p2",
    productName: "Classic Leather Handbag — Tan",
    sku: "UC-HB-TAN-002",
    quantity: 1,
    amount: 1299,
    status: "packed",
    orderDate: "01 Mar 2026, 08:15 AM",
    customerCity: "Mumbai",
    fulfillment: "Easy Ship",
    paymentMode: "Prepaid",
  },
  {
    id: "fk-o3",
    orderId: "OD4287193846890",
    productId: "fk-p3",
    productName: "Artificial Wooden Flower Vase",
    sku: "UC-VD-SET-003",
    quantity: 2,
    amount: 1156,
    status: "shipped",
    orderDate: "28 Feb 2026, 04:30 PM",
    customerCity: "Bangalore",
    fulfillment: "FBF",
    paymentMode: "COD",
  },
  {
    id: "fk-o4",
    orderId: "OD4287193846501",
    productId: "fk-p5",
    productName: "Minimalist Wall Art Frame Set of 3",
    sku: "UC-DC-WAL-005",
    quantity: 1,
    amount: 899,
    status: "delivered",
    orderDate: "26 Feb 2026, 11:20 AM",
    customerCity: "Delhi",
    fulfillment: "FBF",
    paymentMode: "Prepaid",
  },
  {
    id: "fk-o5",
    orderId: "OD4287193846208",
    productId: "fk-p1",
    productName: "TELGO Travel Backpack — Sky Blue",
    sku: "UC-BP-SKY-001",
    quantity: 1,
    amount: 999,
    status: "delivered",
    orderDate: "24 Feb 2026, 02:05 PM",
    customerCity: "Hyderabad",
    fulfillment: "FBF",
    paymentMode: "Prepaid",
  },
  {
    id: "fk-o6",
    orderId: "OD4287193845903",
    productId: "fk-p6",
    productName: "TELGO Daypack — Olive Green",
    sku: "UC-BP-OLV-006",
    quantity: 1,
    amount: 849,
    status: "cancelled",
    orderDate: "22 Feb 2026, 07:48 AM",
    customerCity: "Chennai",
    fulfillment: "Self Ship",
    paymentMode: "COD",
  },
  {
    id: "fk-o7",
    orderId: "OD4287193845601",
    productId: "fk-p2",
    productName: "Classic Leather Handbag — Tan",
    sku: "UC-HB-TAN-002",
    quantity: 1,
    amount: 1299,
    status: "return_requested",
    orderDate: "20 Feb 2026, 05:12 PM",
    customerCity: "Jaipur",
    fulfillment: "Easy Ship",
    paymentMode: "Prepaid",
  },
];

export type FlipkartPayment = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "completed" | "scheduled" | "processing";
  type: "settlement" | "fee" | "refund" | "ads";
};

export const FLIPKART_PAYMENTS: FlipkartPayment[] = [
  { id: "fp1", date: "01 Mar 2026", description: "Weekly settlement — Week 8", amount: 42850, status: "scheduled", type: "settlement" },
  { id: "fp2", date: "22 Feb 2026", description: "Weekly settlement — Week 7", amount: 38620, status: "completed", type: "settlement" },
  { id: "fp3", date: "22 Feb 2026", description: "Flipkart Ads spend", amount: -4200, status: "completed", type: "ads" },
  { id: "fp4", date: "15 Feb 2026", description: "Weekly settlement — Week 6", amount: 35280, status: "completed", type: "settlement" },
  { id: "fp5", date: "14 Feb 2026", description: "Return refund — OD4287193845601", amount: -1299, status: "completed", type: "refund" },
  { id: "fp6", date: "08 Feb 2026", description: "Platform commission & fees", amount: -2840, status: "completed", type: "fee" },
];

export type FlipkartReturn = {
  id: string;
  returnId: string;
  orderId: string;
  productName: string;
  reason: string;
  status: "pending" | "approved" | "rejected" | "completed";
  date: string;
  amount: number;
};

export const FLIPKART_RETURNS: FlipkartReturn[] = [
  { id: "fr1", returnId: "RET-FK-88201", orderId: "OD4287193845601", productName: "Classic Leather Handbag — Tan", reason: "Size mismatch", status: "pending", date: "28 Feb 2026", amount: 1299 },
  { id: "fr2", returnId: "RET-FK-88144", orderId: "OD4287193844102", productName: "Gold-Plated Statement Necklace Set", reason: "Quality issue", status: "approved", date: "25 Feb 2026", amount: 449 },
  { id: "fr3", returnId: "RET-FK-88098", orderId: "OD4287193843801", productName: "TELGO Travel Backpack — Sky Blue", reason: "Changed mind", status: "completed", date: "20 Feb 2026", amount: 999 },
];

export const FLIPKART_DASHBOARD = {
  revenue7d: 186420,
  orders7d: 222,
  units7d: 248,
  returnRate: 2.8,
  avgRating: 4.6,
  adRoas: 4.2,
  revenueTrend: [
    { day: "Mon", revenue: 22400, orders: 28 },
    { day: "Tue", revenue: 24800, orders: 31 },
    { day: "Wed", revenue: 26200, orders: 34 },
    { day: "Thu", revenue: 28100, orders: 36 },
    { day: "Fri", revenue: 31200, orders: 39 },
    { day: "Sat", revenue: 29800, orders: 37 },
    { day: "Sun", revenue: 23920, orders: 17 },
  ],
  categorySplit: [
    { name: "Bags", value: 38 },
    { name: "Home Decor", value: 28 },
    { name: "Handbags", value: 22 },
    { name: "Jewellery", value: 12 },
  ],
  monthlySales: [
    { month: "Oct", sales: 142000 },
    { month: "Nov", sales: 158000 },
    { month: "Dec", sales: 224000 },
    { month: "Jan", sales: 186000 },
    { month: "Feb", sales: 198000 },
    { month: "Mar", sales: 86420 },
  ],
  trafficSources: [
    { name: "Search", value: 42 },
    { name: "Direct", value: 24 },
    { name: "Ads", value: 18 },
    { name: "Referral", value: 10 },
    { name: "Other", value: 6 },
  ],
  orderStatusSplit: [
    { name: "Delivered", value: 58 },
    { name: "Shipped", value: 18 },
    { name: "Packed", value: 12 },
    { name: "New", value: 8 },
    { name: "Cancelled", value: 4 },
  ],
  kpis: {
    todaySales: 28640,
    revenue: 186420,
    orders: 222,
    visitors: 28420,
    conversion: 3.2,
    wallet: 42850,
    returns: 12,
    cancelled: 8,
  },
};

export const FLIPKART_CUSTOMERS = [
  { id: "c1", name: "Priya Sharma", city: "Mumbai", orders: 4, spent: 4896, lastOrder: "28 Feb 2026", rating: 5 },
  { id: "c2", name: "Rahul Verma", city: "Delhi", orders: 3, spent: 3297, lastOrder: "26 Feb 2026", rating: 4 },
  { id: "c3", name: "Ananya Reddy", city: "Hyderabad", orders: 2, spent: 1998, lastOrder: "24 Feb 2026", rating: 5 },
  { id: "c4", name: "Vikram Patel", city: "Ahmedabad", orders: 2, spent: 1748, lastOrder: "22 Feb 2026", rating: 4 },
  { id: "c5", name: "Sneha Iyer", city: "Bangalore", orders: 1, spent: 1299, lastOrder: "20 Feb 2026", rating: 3 },
];

export const FLIPKART_ADS = [
  { id: "fa1", name: "Backpack — Search Boost", type: "PLA", budget: 5000, spend: 3840, roas: 4.8, status: "active", impressions: 84200, clicks: 2840 },
  { id: "fa2", name: "Home Decor — Display", type: "Display", budget: 3000, spend: 2100, roas: 3.2, status: "active", impressions: 124000, clicks: 1920 },
  { id: "fa3", name: "Handbag — Brand Store", type: "Brand", budget: 2000, spend: 1980, roas: 2.9, status: "paused", impressions: 42000, clicks: 980 },
];

export const FLIPKART_REPORTS = [
  { id: "r1", name: "Sales Summary", period: "Last 7 days", generated: "01 Mar 2026" },
  { id: "r2", name: "Inventory Health", period: "Last 30 days", generated: "28 Feb 2026" },
  { id: "r3", name: "Return Analysis", period: "Last 30 days", generated: "28 Feb 2026" },
  { id: "r4", name: "Tax Invoice Report", period: "Feb 2026", generated: "01 Mar 2026" },
  { id: "r5", name: "Ads Performance", period: "Last 7 days", generated: "01 Mar 2026" },
];

export function getFlipkartProduct(id: string) {
  return FLIPKART_PRODUCTS.find((p) => p.id === id);
}

export function getFlipkartOrder(id: string) {
  return FLIPKART_ORDERS.find((o) => o.id === id);
}
