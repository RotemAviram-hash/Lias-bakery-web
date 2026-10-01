import {
  Container,
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../router/routes"; // ודאי שנתיב הייבוא תואם לפרויקט שלך

export default function HeroSection() {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "972500000000"; // החליפי במספר הטלפון של בעלת העסק
    const message = encodeURIComponent(
      "שלום! אשמח לשמוע פרטים נוספים ולהתייעץ.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        {/* צד ימין - טקסטים וכפתורים */}
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

            {/* כותרת ראשית */}
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

            {/* תיאור */}
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                maxWidth: 480,
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              קרואסוני חמאה פריכים, מאפי שוקולד נימוחים וקינוחי בייבי מעוצבים.
              נאפה באהבה עם המרכיבים האיכותיים ביותר.
            </Typography>

            {/* כפתורים */}
            <Stack
              spacing={2}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
                pt: 1,
              }}
            >
              {/* כפתור ראשי - מעבר לקטלוג */}
              <Button
                variant="contained"
                size="large"
                startIcon={<CakeIcon />}
                onClick={() => navigate(ROUTES.BAKERY_CATALOG)}
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

              {/* כפתור משני - ייעוץ / וואטסאפ */}
              <Button
                variant="outlined"
                size="large"
                startIcon={<ShoppingBagIcon />}
                onClick={handleWhatsAppContact}
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

            {/* הוכחה חברתית */}
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
                sx={{ fontWeight: 600, color: "text.secondary" }}
              >
                מאות לקוחות מרוצים מדי שבוע
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* צד שמאל - תמונת קרואסון מרכזית וכרטיסיות צפות */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* תמונת הקרואסון הראשית */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
              alt="קרואסון חמאה פריך"
              sx={{
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

            {/* כרטיסייה צפה 1 */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                top: "8%",
                right: { xs: "-2%", sm: "4%" },
                p: 1.5,
                borderRadius: "20px",
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                animation: "float 3.5s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-10px)" },
                },
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

            {/* כרטיסייה צפה 2 */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                bottom: "6%",
                left: { xs: "-2%", sm: "4%" },
                p: 1.5,
                borderRadius: "20px",
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
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
  );
}
