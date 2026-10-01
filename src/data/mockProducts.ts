import type { BakeryProduct } from "../types/bakery";

export const MOCK_PRODUCTS: BakeryProduct[] = [
  {
    id: "1",
    title: "[קרואסון חמאה קלאסי]",
    description:
      "[קרואסון פריך וזהוב מחמאה צרפתית איכותית, נאפה טרי מדי בוקר.]",
    price: 16,
    category: "croissant",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "2",
    title: "[קרואסון שוקולד שקדים]",
    description:
      "[קרואסון פריך במילוי קרם שקדים עשיר ושוקולד מריר, מсыпаט בשבבי שקדים.]",
    price: 22,
    category: "croissant",
    imageUrl:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "3",
    title: "[עוגת שוקולד פאדז׳ ביתית]",
    description:
      "[עוגת שוקולד עשירה, נימוחה ומנחמת עם ציפוי גנאש שוקולד עשיר.]",
    price: 120,
    category: "cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "[מאפה גבינות ותרד ביתי]",
    description: "[מאפה עלים ביתי פריך במילוי גבינות איכותיות ותרד טרי.]",
    price: 18,
    category: "savory",
    imageUrl:
      "https://images.unsplash.com/photo-1621236378699-8597faf6a145?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "[עוגיות שוקולד צ׳יפס נימוחות]",
    description: "[מארז עוגיות שוקולד צ׳יפס ביתיות במרקם מושלם שנמסות בפה.]",
    price: 42,
    category: "cookies",
    imageUrl:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
];
