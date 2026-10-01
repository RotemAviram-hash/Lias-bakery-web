import React from "react";
import {
  Typography,
  Box,
  Paper,
  Container,
  alpha,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../router/routes";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      dir="rtl"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* תאורת רקע דינמית מבוססת Palette */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "100%", md: "700px" },
          height: "450px",
          background: isDark
            ? `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, rgba(0,0,0,0) 70%)`
            : `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, rgba(255,255,255,0) 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 6 },
            borderRadius: "28px",
            bgcolor: isDark ? alpha("#ffffff", 0.02) : "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: isDark
              ? "0 20px 40px rgba(0,0,0,0.5)"
              : "0 20px 40px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "all 0.3s ease",
          }}
        >
          {/* תגית עליונה */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.8,
              borderRadius: "50px",
              bgcolor: isDark ? alpha("#ffffff", 0.04) : alpha("#000000", 0.03),
              border: "1px solid",
              borderColor: "divider",
              mb: 3,
            }}
          >
            <ErrorOutlineRoundedIcon
              sx={{ fontSize: "16px", color: "primary.main" }}
            />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "text.secondary",
                letterSpacing: "0.5px",
              }}
            >
              שגיאה 404 • עמוד לא נמצא
            </Typography>
          </Box>

          {/* מספר 404 מבוסס ערכי ה-Palette במערכת */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "5.5rem", sm: "7rem" },
              fontWeight: 900,
              lineHeight: 1,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary?.main || theme.palette.primary.light} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-2px",
              mb: 2,
            }}
          >
            404
          </Typography>

          {/* כותרת ראשית */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              fontSize: { xs: "1.5rem", sm: "1.85rem" },
            }}
          >
            אופס! העמוד שחיפשת לא נמצא
          </Typography>

          {/* תיאור */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            נראה שהכתובת שנסית להגיע אליה אינה קיימת, הוסרה, או שהיא זמנית אינה
            זמינה.
          </Typography>

          {/* כרטיס טיפ פנימי */}
          <Box
            sx={{
              width: "100%",
              p: 2.5,
              mb: 4,
              borderRadius: "16px",
              bgcolor: isDark ? alpha("#ffffff", 0.02) : alpha("#000000", 0.02),
              border: "1px solid",
              borderColor: "divider",
              textAlign: "right",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                lineHeight: 1.5,
              }}
            >
              <Box component="span" sx={{ fontSize: "1.2rem" }}>
                💡
              </Box>
              <span>
                <strong>טיפ:</strong> אפשר לחזור לעמוד הבית או לעמוד הקודם כדי
                להמשיך לגלוש במערכת בקלות.
              </span>
            </Typography>
          </Box>

          {/* כפתורי פעולה */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeRoundedIcon sx={{ ml: 0.5 }} />}
              onClick={() => navigate(ROUTES.HOME)}
              sx={{
                flex: 1,
                py: 1.5,
                borderRadius: "14px",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.35)}`,
                },
              }}
            >
              עמוד הבית
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackRoundedIcon sx={{ ml: 0.5 }} />}
              onClick={() => navigate(-1)}
              sx={{
                flex: 1,
                py: 1.5,
                borderRadius: "14px",
                fontWeight: 700,
                textTransform: "none",
                borderColor: "divider",
                color: "text.primary",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "text.secondary",
                  bgcolor: isDark
                    ? alpha("#ffffff", 0.05)
                    : alpha("#000000", 0.03),
                  transform: "translateY(-2px)",
                },
              }}
            >
              חזרה אחורה
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default PageNotFound;
