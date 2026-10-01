export interface BakeryProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: "croissant" | "cakes" | "savory" | "cookies";
  imageUrl: string;
  isPopular?: boolean;
}
