import { useCallback, memo } from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../router/routes";

// 📱 קבועים מחוץ לקומפוננטה למניעת הקצאות זיכרון חוזרות ב-render
const PHONE_NUMBER = "972500000000";
const WHATSAPP_CONSULT_MESSAGE = encodeURIComponent(
  "שלום! אשמח לשמוע פרטים נוספים ולהתייעץ.",
);

// 🎨 הגדרת Keyframes לאנימציות הציפה של הכרטיסיות
const FLOAT_ANIMATION_1 = {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-10px)" },
};

const FLOAT_ANIMATION_2 = {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-8px)" },
};

function HeroSection() {
  const navigate = useNavigate();
  const theme = useTheme();

  // 🎯 שמיכה לפונקציות עם useCallback לשמירה על רפרנס יציב
  const handleWhatsAppContact = useCallback(() => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_CONSULT_MESSAGE}`,
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  const handleGoToCatalog = useCallback(() => {
    navigate(ROUTES.BAKERY_CATALOG);
  }, [navigate]);

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* 🌟 1. אלמנט רקע זוהר ראשון (פינה ימנית עליונה) */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: "50%",
          background:
            theme.palette.mode === "light"
              ? "radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, rgba(255,255,255,0) 70%)"
              : "radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 🌟 2. אלמנט רקע זוהר שני (פינה שמאלית תחתונה) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: { xs: 280, md: 450 },
          height: { xs: 280, md: 450 },
          borderRadius: "50%",
          background:
            theme.palette.mode === "light"
              ? "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(255,255,255,0) 70%)"
              : "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={5} sx={{ alignItems: "center" }}>
          {/* צד ימין - תוכן טקסטואלי */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              spacing={3}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              {/* תגית עליונה */}
              <Chip
                icon={
                  <AutoAwesomeIcon sx={{ color: "primary.main !important" }} />
                }
                label="קרואסונים חמים ומאפים טריים בכל בוקר! 🥐"
                sx={{
                  backgroundColor: "background.paper",
                  fontWeight: "bold",
                  color: "primary.main",
                  px: 1,
                  py: 2.5,
                  borderRadius: "50px",
                  boxShadow: "0 4px 15px rgba(244, 114, 182, 0.15)",
                  fontSize: "0.95rem",
                }}
              />

              {/* כותרת מודגשת עם גרדיאנט */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "3.8rem" },
                  color: "text.primary",
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                }}
              >
                ניחוח של בוקר, <br />
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(45deg, #EC4899 30%, #F59E0B 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  טעם של עוד! ✨
                </Box>
              </Typography>

              {/* תיאור קצר */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", sm: "1.2rem" },
                  maxWidth: 480,
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                קרואסוני חמאה פריכים, מאפי שוקולד נימוחים וקינוחי בייבי מעוצבים.
                נאפה באהבה עם המרכיבים האיכותיים ביותר.
              </Typography>

              {/* כפתורי הנעה לפעולה */}
              <Stack
                spacing={2}
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  width: { xs: "100%", sm: "auto" },
                  pt: 1,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CakeIcon />}
                  onClick={handleGoToCatalog}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    boxShadow: "0 8px 20px rgba(244, 114, 182, 0.3)",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  לצפייה בקטלוג
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ShoppingBagIcon />}
                  onClick={handleWhatsAppContact}
                  aria-label="פתיחת שיחת וואטסאפ להתייעצות"
                  sx={{
                    color: "text.primary",
                    borderColor: "secondary.light",
                    backgroundColor: "action.hover",
                    borderWidth: "2px",
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    px: 3,
                    py: 1.5,
                    borderRadius: "50px",
                    "&:hover": {
                      borderColor: "secondary.main",
                      borderWidth: "2px",
                      color: "secondary.main",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  רוצים להתייעץ? נדבר!
                </Button>
              </Stack>

              {/* שורת אמינות ופידבק */}
              <Stack
                spacing={1}
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                <FavoriteIcon sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontWeight: 600 }}
                >
                  מאות לקוחות מרוצים מדי שבוע ❤️
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* צד שמאל - תמונה עם הילה, גב דקורטיבי וכרטיסיות אימוג'י צפות */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 1, sm: 2 },
              }}
            >
              {/* 🎨 1. גב דקורטיבי סובב מאחורי התמונה (Backdrop Frame) */}
              <Box
                sx={{
                  position: "absolute",
                  inset: { xs: 0, sm: 10 },
                  borderRadius: "36px",
                  background:
                    "linear-gradient(135deg, rgba(244, 114, 182, 0.3) 0%, rgba(251, 191, 36, 0.3) 100%)",
                  transform: "rotate(-4deg)",
                  zIndex: 0,
                }}
              />

              {/* 🖼️ 2. התמונה הראשית (כוללת הרחף וההטיה) */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
                alt="מאפים וקרואסונים טריים"
                loading="eager"
                fetchPriority="high"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: 460,
                  height: { xs: 320, sm: 420 },
                  objectFit: "cover",
                  borderRadius: "32px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  transform: "rotate(-2deg)",
                  border: "4px solid",
                  borderColor: "background.paper",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(0deg) scale(1.02)",
                  },
                }}
              />

              {/* 🥐 3. כרטיסייה צפה 1 (עליונה) */}
              <Paper
                elevation={4}
                sx={{
                  position: "absolute",
                  top: "8%",
                  right: { xs: "-2%", sm: "2%" },
                  zIndex: 2,
                  p: 1.5,
                  px: 2,
                  borderRadius: "20px",
                  backgroundColor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  animation: "float1 3.5s ease-in-out infinite",
                  "@keyframes float1": FLOAT_ANIMATION_1,
                }}
              >
                <Box sx={{ fontSize: "1.8rem" }}>🥐</Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "text.primary",
                    }}
                  >
                    קרואסון שוקולד
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "secondary.main", fontWeight: 700 }}
                  >
                    חם מהתנור ⭐ 4.9
                  </Typography>
                </Box>
              </Paper>

              {/* ✨ 4. כרטיסייה צפה 2 (תחתונה) */}
              <Paper
                elevation={4}
                sx={{
                  position: "absolute",
                  bottom: "6%",
                  left: { xs: "-2%", sm: "2%" },
                  zIndex: 2,
                  p: 1.5,
                  px: 2,
                  borderRadius: "20px",
                  backgroundColor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  animation: "float2 4s ease-in-out infinite 0.5s",
                  "@keyframes float2": FLOAT_ANIMATION_2,
                }}
              >
                <Box sx={{ fontSize: "1.8rem" }}>✨</Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "text.primary",
                    }}
                  >
                    100% חמאה צרפתית
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    איכות ללא פשרות
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default memo(HeroSection);
