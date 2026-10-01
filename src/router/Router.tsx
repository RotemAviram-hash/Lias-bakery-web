import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import ROUTES from "./routes";
import BakeryCatalogPage from "../pages/BakeryCatalogPage";

// טעינה דינמית של העמודים במידת הצורך
const HeroPage = lazy(() => import("../pages/HeroPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// רכיב טעינה קטן וממורכז בזמן שהעמוד יורד
const PageLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <CircularProgress />
  </Box>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ========================================== */}
        {/* עמודים ציבוריים */}
        {/* ========================================== */}
        <Route path={ROUTES.HOME} element={<HeroPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.BAKERY_CATALOG} element={<BakeryCatalogPage />} />

        {/* עמוד 404 - תפיסת כל הנתיבים הלא קיימים */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
