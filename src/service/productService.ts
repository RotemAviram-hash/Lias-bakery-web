import type { BakeryProduct } from "../types/bakery";
import { MOCK_PRODUCTS } from "../data/mockProducts";

// כרגע הפונקציה שואבת מהדמו, בעתיד רק משנים את הפנים של הפונקציה ל-Firebase!
export async function fetchProducts(): Promise<BakeryProduct[]> {
  // סימולציה של השהיית רשת קטנה (כמו פנייה לשרת)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 300);
  });
}
