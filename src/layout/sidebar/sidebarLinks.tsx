import ROUTES from "../../router/routes";

import {
  Home, // אייקון דף הבית
  BakeryDining, // אייקון קטלוג מאפים (או MenuBook / LocalCake)
  Info, // אייקון אודות
} from "@mui/icons-material";

export const sidebarList = [
  {
    name: "דף הבית",
    to: ROUTES.HOME,
    icon: <Home />,
  },
  {
    name: "הקטלוג שלנו",
    to: ROUTES.BAKERY_CATALOG,
    icon: <BakeryDining />,
  },
  {
    name: "אודות",
    to: ROUTES.ABOUT,
    icon: <Info />,
  },
];
