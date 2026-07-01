export const MEESHO_SUPPLIER = {
  storeName: "Deal sale",
  supplierId: "MS-DL-8842",
  email: "dealsale.supplier@demo.meesho",
  phone: "+91 98765 43210",
  gstin: "29ABCDE1234F1Z5",
  warehouse: "Bangalore FC — Whitefield",
  joinedDate: "Jan 2025",
};

export const MEESHO_ONBOARDING = {
  catalogsLive: 3,
  steps: [
    { id: 1, label: "Upload catalogs to get started", done: true },
    { id: 2, label: "Catalogs go live on Meesho", done: true },
    { id: 3, label: "Get your first order", done: false, active: true },
  ],
};

export const MEESHO_LEARN_ITEMS = [
  {
    id: "1",
    title: "Book free live training",
    badge: "Expert Led",
    description: "Learn to operate and grow your business on meesho.",
    icon: "training",
  },
  {
    id: "2",
    title: "Prepare catalogs for meesho",
    description: "Watch step-by-step catalog preparation guides.",
    icon: "youtube",
  },
  {
    id: "3",
    title: "Pricing & commission",
    description: "Understand Meesho pricing and commission structure.",
    icon: "pricing",
  },
  {
    id: "4",
    title: "Delivery & Returns",
    description: "Learn about shipping, delivery and return policies.",
    icon: "delivery",
  },
];

export type MeeshoCatalogUpload = {
  id: string;
  fileId: string;
  category: string;
  type: "bulk" | "single";
  status: "all" | "action_required" | "qc_progress" | "qc_error" | "qc_pass";
  uploadedAt: string;
  products: number;
};

export const MEESHO_CATALOG_UPLOADS: MeeshoCatalogUpload[] = [
  {
    id: "cu-1",
    fileId: "SF-882910",
    category: "Home Decor",
    type: "single",
    status: "qc_pass",
    uploadedAt: "28 Feb 2026",
    products: 1,
  },
  {
    id: "cu-2",
    fileId: "SF-882845",
    category: "Home Decor",
    type: "single",
    status: "qc_pass",
    uploadedAt: "26 Feb 2026",
    products: 1,
  },
  {
    id: "cu-3",
    fileId: "SF-882701",
    category: "Jewellery",
    type: "single",
    status: "qc_pass",
    uploadedAt: "24 Feb 2026",
    products: 1,
  },
  {
    id: "cu-4",
    fileId: "SF-882512",
    category: "Fashion",
    type: "single",
    status: "qc_pass",
    uploadedAt: "22 Feb 2026",
    products: 1,
  },
  {
    id: "cu-5",
    fileId: "SF-882401",
    category: "Fashion",
    type: "single",
    status: "qc_pass",
    uploadedAt: "20 Feb 2026",
    products: 1,
  },
];

export type MeeshoInventoryCatalog = {
  id: string;
  name: string;
  catalogId: string;
  category: string;
  imageUrl: string;
  skus: MeeshoInventorySku[];
};

export type MeeshoInventorySku = {
  id: string;
  title: string;
  styleId: string;
  skuId: string;
  variation: string;
  meeshoPrice: number;
  estimatedOrdersPerDay: number;
  daysToStockout: number;
  stock: number;
  imageUrl: string;
};

export const MEESHO_INVENTORY: MeeshoInventoryCatalog[] = [
  {
    id: "cat-1",
    name: "Ravishing Vases",
    catalogId: "509789999",
    category: "Home Decor",
    imageUrl: "/products/home%20decor/Vases.jpg.jpg",
    skus: [
      {
        id: "sku-1",
        title: "Artificial Wooden Flower Vase | Home Decor Showpiece | Table Decor | Gift Item",
        styleId: "MS-ST-001",
        skuId: "MS-SKU-001",
        variation: "Free Size",
        meeshoPrice: 578,
        estimatedOrdersPerDay: 0.2,
        daysToStockout: 50,
        stock: 10,
        imageUrl: "/products/home%20decor/Vases.jpg.jpg",
      },
    ],
  },
  {
    id: "cat-2",
    name: "Elegant Handbags",
    catalogId: "509788412",
    category: "Fashion",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag.jpg.png",
    skus: [
      {
        id: "sku-2",
        title: "Classic Leather Handbag — Tan | Crossbody Strap",
        styleId: "MS-ST-002",
        skuId: "MS-SKU-002",
        variation: "Free Size",
        meeshoPrice: 899,
        estimatedOrdersPerDay: 0.4,
        daysToStockout: 35,
        stock: 14,
        imageUrl: "/products/Hand%20Bag/Hand%20Bag.jpg.png",
      },
    ],
  },
  {
    id: "cat-3",
    name: "Travel Backpacks",
    catalogId: "509787201",
    category: "Fashion",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg.jfif",
    skus: [
      {
        id: "sku-3",
        title: "TELGO Travel Backpack — Sky Blue | Laptop Compartment",
        styleId: "MS-ST-003",
        skuId: "MS-SKU-003",
        variation: "Free Size",
        meeshoPrice: 999,
        estimatedOrdersPerDay: 0.6,
        daysToStockout: 28,
        stock: 18,
        imageUrl: "/products/Bag%20Pack/Bagpack.jpg.jfif",
      },
    ],
  },
];

export type MeeshoOrderStatus =
  | "pending"
  | "processing"
  | "packed"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "returned"
  | "cancelled";

export type MeeshoPaymentType = "Prepaid" | "COD";

export type MeeshoOrder = {
  id: string;
  orderId: string;
  skuId: string;
  productName: string;
  imageUrl: string;
  customerName: string;
  city: string;
  quantity: number;
  sellingPrice: number;
  amount: number;
  paymentType: MeeshoPaymentType;
  courierPartner: string;
  orderDate: string;
  orderDateIso: string;
  expectedDeliveryDate: string;
  status: MeeshoOrderStatus;
};

export const MEESHO_ORDERS: MeeshoOrder[] = [
  {
    id: "o1",
    orderId: "MSORD7829145632",
    skuId: "MS-SKU-002",
    productName: "Classic Leather Handbag — Maroon | Crossbody Strap",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag2.jpg.png",
    customerName: "Priya Sharma",
    city: "Delhi",
    quantity: 1,
    sellingPrice: 899,
    amount: 899,
    paymentType: "Prepaid",
    courierPartner: "Delhivery",
    orderDate: "01 Mar 2026",
    orderDateIso: "2026-03-01",
    expectedDeliveryDate: "05 Mar 2026",
    status: "pending",
  },
  {
    id: "o2",
    orderId: "MSORD7829038471",
    skuId: "MS-SKU-004",
    productName: "Kundan Choker Necklace Set with Matching Earrings",
    imageUrl: "/products/Jewellery/LJ113.jpg.jpg",
    customerName: "Rahul Verma",
    city: "Mumbai",
    quantity: 1,
    sellingPrice: 449,
    amount: 449,
    paymentType: "COD",
    courierPartner: "Blue Dart",
    orderDate: "28 Feb 2026",
    orderDateIso: "2026-02-28",
    expectedDeliveryDate: "04 Mar 2026",
    status: "processing",
  },
  {
    id: "o3",
    orderId: "MSORD7828912044",
    skuId: "MS-SKU-001",
    productName: "Artificial Wooden Flower Vase | Home Decor Showpiece",
    imageUrl: "/products/home%20decor/Vases.jpg.jpg",
    customerName: "Ananya Reddy",
    city: "Hyderabad",
    quantity: 2,
    sellingPrice: 578,
    amount: 1156,
    paymentType: "Prepaid",
    courierPartner: "Ekart",
    orderDate: "27 Feb 2026",
    orderDateIso: "2026-02-27",
    expectedDeliveryDate: "03 Mar 2026",
    status: "packed",
  },
  {
    id: "o4",
    orderId: "MSORD7828847290",
    skuId: "MS-SKU-003",
    productName: "TELGO Travel Backpack — Black | 35L Laptop Compartment",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg%20(2).jfif",
    customerName: "Vikram Patel",
    city: "Ahmedabad",
    quantity: 1,
    sellingPrice: 1099,
    amount: 1099,
    paymentType: "COD",
    courierPartner: "Xpressbees",
    orderDate: "26 Feb 2026",
    orderDateIso: "2026-02-26",
    expectedDeliveryDate: "02 Mar 2026",
    status: "shipped",
  },
  {
    id: "o5",
    orderId: "MSORD7828715633",
    skuId: "MS-SKU-005",
    productName: "Women's Sling Bag — Brown | Adjustable Chain Strap",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag3.jpg.png",
    customerName: "Sneha Iyer",
    city: "Bengaluru",
    quantity: 2,
    sellingPrice: 799,
    amount: 1598,
    paymentType: "Prepaid",
    courierPartner: "Shadowfax",
    orderDate: "25 Feb 2026",
    orderDateIso: "2026-02-25",
    expectedDeliveryDate: "01 Mar 2026",
    status: "out_for_delivery",
  },
  {
    id: "o6",
    orderId: "MSORD7828600124",
    skuId: "MS-SKU-006",
    productName: "Gold Plated Jhumka Earrings — Traditional Festive Wear",
    imageUrl: "/products/Jewellery/LJ72.jpg.jpg",
    customerName: "Amit Kumar",
    city: "Pune",
    quantity: 3,
    sellingPrice: 299,
    amount: 897,
    paymentType: "COD",
    courierPartner: "Delhivery",
    orderDate: "24 Feb 2026",
    orderDateIso: "2026-02-24",
    expectedDeliveryDate: "28 Feb 2026",
    status: "delivered",
  },
  {
    id: "o7",
    orderId: "MSORD7828489102",
    skuId: "MS-SKU-007",
    productName: "Ceramic Table Lamp — White Base with Linen Shade",
    imageUrl: "/products/home%20decor/Lamp.jpg.jpg",
    customerName: "Kavita Singh",
    city: "Jaipur",
    quantity: 1,
    sellingPrice: 749,
    amount: 749,
    paymentType: "Prepaid",
    courierPartner: "Ekart",
    orderDate: "22 Feb 2026",
    orderDateIso: "2026-02-22",
    expectedDeliveryDate: "26 Feb 2026",
    status: "delivered",
  },
  {
    id: "o8",
    orderId: "MSORD7828376401",
    skuId: "MS-SKU-008",
    productName: "Travel Backpack — Navy Blue | USB Charging Port",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg%20(3).jfif",
    customerName: "Rohit Gupta",
    city: "Lucknow",
    quantity: 1,
    sellingPrice: 949,
    amount: 949,
    paymentType: "Prepaid",
    courierPartner: "DTDC",
    orderDate: "20 Feb 2026",
    orderDateIso: "2026-02-20",
    expectedDeliveryDate: "24 Feb 2026",
    status: "delivered",
  },
  {
    id: "o9",
    orderId: "MSORD7828265018",
    skuId: "MS-SKU-009",
    productName: "Vegan Leather Tote Bag — Black | Office Handbag",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag4.jpg.png",
    customerName: "Meera Nair",
    city: "Chennai",
    quantity: 1,
    sellingPrice: 849,
    amount: 849,
    paymentType: "Prepaid",
    courierPartner: "Blue Dart",
    orderDate: "18 Feb 2026",
    orderDateIso: "2026-02-18",
    expectedDeliveryDate: "22 Feb 2026",
    status: "returned",
  },
  {
    id: "o10",
    orderId: "MSORD7828152033",
    skuId: "MS-SKU-010",
    productName: "Oxidised Silver Kada Bracelet — Adjustable Unisex",
    imageUrl: "/products/Jewellery/LJ68.jpg.jpg",
    customerName: "Arjun Malhotra",
    city: "Surat",
    quantity: 2,
    sellingPrice: 299,
    amount: 598,
    paymentType: "COD",
    courierPartner: "Xpressbees",
    orderDate: "17 Feb 2026",
    orderDateIso: "2026-02-17",
    expectedDeliveryDate: "21 Feb 2026",
    status: "cancelled",
  },
  {
    id: "o11",
    orderId: "MSORD7828041109",
    skuId: "MS-SKU-011",
    productName: "Macrame Wall Hanging Set — Boho Home Decor (Pack of 2)",
    imageUrl: "/products/home%20decor/Homedecor.jpg.jpg",
    customerName: "Divya Joshi",
    city: "Delhi",
    quantity: 1,
    sellingPrice: 529,
    amount: 529,
    paymentType: "COD",
    courierPartner: "Delhivery",
    orderDate: "15 Feb 2026",
    orderDateIso: "2026-02-15",
    expectedDeliveryDate: "19 Feb 2026",
    status: "pending",
  },
  {
    id: "o12",
    orderId: "MSORD7827928834",
    skuId: "MS-SKU-012",
    productName: "Laptop Backpack — Grey | Anti-Theft & Water Resistant",
    imageUrl: "/products/Bag%20Pack/Bagpack.jpg%20(4).jfif",
    customerName: "Karan Mehta",
    city: "Mumbai",
    quantity: 1,
    sellingPrice: 1199,
    amount: 1199,
    paymentType: "Prepaid",
    courierPartner: "Ekart",
    orderDate: "14 Feb 2026",
    orderDateIso: "2026-02-14",
    expectedDeliveryDate: "18 Feb 2026",
    status: "processing",
  },
  {
    id: "o13",
    orderId: "MSORD7827816502",
    skuId: "MS-SKU-002",
    productName: "Classic Leather Handbag — Tan | Crossbody Strap",
    imageUrl: "/products/Hand%20Bag/Hand%20Bag.jpg.png",
    customerName: "Pooja Agarwal",
    city: "Pune",
    quantity: 1,
    sellingPrice: 799,
    amount: 799,
    paymentType: "COD",
    courierPartner: "Shadowfax",
    orderDate: "12 Feb 2026",
    orderDateIso: "2026-02-12",
    expectedDeliveryDate: "16 Feb 2026",
    status: "packed",
  },
  {
    id: "o14",
    orderId: "MSORD7827704290",
    skuId: "MS-SKU-013",
    productName: "Pearl Drop Pendant Set — Rose Gold Plated",
    imageUrl: "/products/Jewellery/LJ114.jpg.jpg",
    customerName: "Sanjay Reddy",
    city: "Hyderabad",
    quantity: 1,
    sellingPrice: 389,
    amount: 389,
    paymentType: "Prepaid",
    courierPartner: "Blue Dart",
    orderDate: "10 Feb 2026",
    orderDateIso: "2026-02-10",
    expectedDeliveryDate: "14 Feb 2026",
    status: "shipped",
  },
  {
    id: "o15",
    orderId: "MSORD7827593118",
    skuId: "MS-SKU-014",
    productName: "Decorative Resin Showpiece Set — Living Room Accent",
    imageUrl: "/products/home%20decor/home%20decor.jpg.jpg",
    customerName: "Lakshmi Venkatesh",
    city: "Bengaluru",
    quantity: 2,
    sellingPrice: 499,
    amount: 998,
    paymentType: "COD",
    courierPartner: "Xpressbees",
    orderDate: "08 Feb 2026",
    orderDateIso: "2026-02-08",
    expectedDeliveryDate: "12 Feb 2026",
    status: "out_for_delivery",
  },
];

export type MeeshoPayment = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "completed" | "scheduled" | "processing";
};

export const MEESHO_PAYMENTS: MeeshoPayment[] = [
  { id: "p1", date: "28 Feb 2026", description: "Weekly settlement", amount: 12480, status: "scheduled" },
  { id: "p2", date: "21 Feb 2026", description: "Weekly settlement", amount: 8920, status: "completed" },
  { id: "p3", date: "14 Feb 2026", description: "Return deductions", amount: -420, status: "completed" },
  { id: "p4", date: "07 Feb 2026", description: "Weekly settlement", amount: 15640, status: "completed" },
];

export type MeeshoReturn = {
  id: string;
  returnId: string;
  orderId: string;
  productName: string;
  reason: string;
  status: "pending" | "approved" | "rejected" | "completed";
  date: string;
  amount: number;
};

export const MEESHO_RETURNS: MeeshoReturn[] = [
  {
    id: "r1",
    returnId: "RET-44201",
    orderId: "ORD-88102",
    productName: "Ceramic Vase Set of 3",
    reason: "Size mismatch",
    status: "pending",
    date: "27 Feb 2026",
    amount: 578,
  },
  {
    id: "r2",
    returnId: "RET-44188",
    orderId: "ORD-88056",
    productName: "Classic Leather Handbag",
    reason: "Quality issue",
    status: "approved",
    date: "25 Feb 2026",
    amount: 899,
  },
];

export const MEESHO_GROWTH_METRICS = {
  views7d: 18420,
  orders7d: 42,
  revenue7d: 38420,
  conversion: 2.8,
  catalogScore: 78,
  returnRate: 4.2,
};
