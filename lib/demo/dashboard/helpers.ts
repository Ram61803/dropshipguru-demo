/** Deterministic pseudo-random for reproducible unique demo trends per category */
function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16_807 + 0) % 2_147_483_647;
    return (state - 1) / 2_147_483_646;
  };
}

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function generateDailyTrend(
  seed: number,
  baseSales: number,
  baseRevenue: number,
  baseOrders: number,
  volatility: number,
) {
  const random = seededRandom(seed);
  const points = [];

  for (let day = 1; day <= 30; day++) {
    const wave = Math.sin(day / 4.5 + seed * 0.01) * volatility;
    const noise = (random() - 0.5) * volatility * 0.6;
    const weekendDip = day % 7 === 0 || day % 7 === 6 ? -volatility * 0.35 : 0;
    const growth = day * (volatility * 0.015);

    const sales = Math.max(120, baseSales + wave * baseSales * 0.08 + noise * 40 + weekendDip * 20 + growth * 8);
    const revenue = Math.max(800, baseRevenue + wave * baseRevenue * 0.07 + noise * 280 + weekendDip * 120 + growth * 45);
    const orders = Math.max(8, Math.round(baseOrders + wave * 2.5 + noise * 6 + weekendDip * 3 + growth * 0.4));

    points.push({
      date: `Day ${day}`,
      day,
      sales: round(sales),
      revenue: round(revenue),
      orders,
    });
  }

  return points;
}

import type { SellerCategoryId } from "@/types/seller";
import { getProductImageUrl } from "@/lib/demo/products/get-product-image";

export function productImageUrl(seed: string, categoryId: SellerCategoryId = "fashion") {
  return getProductImageUrl(categoryId, seed);
}
