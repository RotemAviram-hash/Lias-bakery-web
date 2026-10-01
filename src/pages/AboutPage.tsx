import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  Chip,
  Grid,
  useTheme,
} from "@mui/material";

import {
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  AutoAwesome as AutoAwesomeIcon,
  Favorite as FavoriteIcon,
  Cake as CakeIcon,
  MenuBook as MenuBookIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";

export default function AboutUs() {
  const theme = useTheme();

  // 📱 מספר הטלפון וההודעה המובנית ל-WhatsApp
  const phoneNumber = "972500000000"; // יש להחליף במספר הטלפון המלא כולל קידומת מדינה ללא +
  const defaultMessage = encodeURIComponent(
    "[שלום! אשמח לשמוע עוד פרטים ולהזמין מאפים מעולים 🥐]",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
  const phoneCallUrl = `tel:+972500000000`; // יש להחליף במספר הטלפון לחיוג ישיר

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* אלמנט דקורטיבי ברקע */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            theme.palette.mode === "light"
              ? "rgba(254, 205, 211, 0.35)"
              : "rgba(244, 114, 182, 0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* כותרת העמוד */}
        <Stack spacing={2} sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Chip
              icon={
                <AutoAwesomeIcon sx={{ color: "primary.main !important" }} />
              }
              label="[הסיפור מאחורי המאפים]"
              sx={{
                backgroundColor: "background.paper",
                fontWeight: "bold",
                color: "primary.main",
                px: 1.5,
                py: 2.5,
                borderRadius: "50px",
                boxShadow: "0 4px 15px rgba(244, 114, 182, 0.15)",
                fontSize: "0.95rem",
              }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
              color: "text.primary",
            }}
          >
            [אפייה ביתית עם כל הלב והנשמה ✨]
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1.05rem", sm: "1.2rem" },
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            [מאפים ביתיים מנחמים, טריים וטעימים לכל מי שרוצה לטעום זיכרון מתוק
            של בית, בהזמנה אישית או מתוך הקטלוג שלנו.]
          </Typography>
        </Stack>

        {/* חלק מרכזי - תמונה + סיפור */}
        <Grid container spacing={6} sx={{ alignItems: "center", mb: 10 }}>
          {/* תמונה ראשית */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="[מאפים ביתיים טריים]"
                sx={{
                  width: "100%",
                  height: { xs: 320, sm: 420 },
                  objectFit: "cover",
                  borderRadius: "28px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  border: "4px solid",
                  borderColor: "background.paper",
                }}
              />

              {/* תגית צפה עם אימוג'י */}
              <Paper
                elevation={3}
                sx={{
                  position: "absolute",
                  bottom: "-20px",
                  right: { xs: "10px", sm: "30px" },
                  p: 2,
                  borderRadius: "20px",
                  backgroundColor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <FavoriteIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 800,
                      color: "text.primary",
                      lineHeight: 1.2,
                    }}
                  >
                    [נעשה באהבה]
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    [100% רכיבים איכותיים]
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* הטקסט והסיפור */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "text.primary" }}
              >
                [אפייה היא השפה שלי להעביר חום ואהבה 🥐]
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                [הכול התחיל מתוך המטבח הביתי והאהבה הגדולה לריח של מאפה טרי
                שנאפה לאט בתנור. כל עוגה, קרואסון או מאפה מלוח מקבלים אצלי את
                מלא תשומת הלב, בדיוק כמו שאני מכינה למשפחה שלי.]
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                [תוכלו לבחור ממגוון הקינוחים והמאפים בקטלוג שלנו או לבקש הזמנה
                אישית המותאמת בדיוק לטעם ולאירוע שלכם. מכיוון שהכול נאפה במיוחד
                עבורכם בהזמנה מראש – הטריות והטעם המושלם מובטחים!]
              </Typography>

              {/* כרטיסי תכונות קטנים */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1 }}
              >
                <Paper
                  sx={{
                    p: 2,
                    flex: 1,
                    borderRadius: "16px",
                    backgroundColor: "background.paper",
                    borderColor: "divider",
                  }}
                >
                  <MenuBookIcon sx={{ color: "primary.main", mb: 1 }} />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 800, color: "text.primary" }}
                  >
                    [בחירה מקטלוג]
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    [מגוון רחב של מאפים קלאסיים ואהובים]
                  </Typography>
                </Paper>

                <Paper
                  sx={{
                    p: 2,
                    flex: 1,
                    borderRadius: "16px",
                    backgroundColor: "background.paper",
                    borderColor: "divider",
                  }}
                >
                  <CakeIcon sx={{ color: "secondary.main", mb: 1 }} />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 800, color: "text.primary" }}
                  >
                    [הזמנה אישית]
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    [התאמה מיוחדת לפי הדרישות שלכם]
                  </Typography>
                </Paper>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* קופסת יצירת קשר ב-WhatsApp ובטלפון */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "32px",
            background:
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, #FFF0F3 0%, #FEF3C7 100%)"
                : "linear-gradient(135deg, #1E1826 0%, #2D1B2E 100%)",
            border: "2px dashed",
            borderColor: "primary.light",
            textAlign: "center",
          }}
        >
          <Stack
            spacing={3}
            sx={{ alignItems: "center", maxWidth: 650, mx: "auto" }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <HandshakeIcon sx={{ color: "primary.main", fontSize: 32 }} />
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "text.primary",
                fontSize: { xs: "1.8rem", md: "2.3rem" },
              }}
            >
              [איך מזמינים?]
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              [נכון לרגע זה, ההזמנות מתבצעות ישירות מולי בשיחה טלפונית או בהודעת
              WhatsApp קלה ומהירה. אשמח להמליץ, לייעץ ולשריין לכם מאפים טריים!]
            </Typography>

            {/* כפתורי הפעולה לקשר ישיר */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: "100%", justifyContent: "center", pt: 1 }}
            >
              {/* כפתור ווצאפ */}
              <Button
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{
                  backgroundColor: "#25D366", // ירוק ווצאפ מוכר ואהוב
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  px: 4,
                  py: 1.6,
                  borderRadius: "50px",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
                  "&:hover": {
                    backgroundColor: "#1DA851",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                [שליחת הודעה ב-WhatsApp]
              </Button>

              {/* כפתור חיוג טלפוני */}
              <Button
                component="a"
                href={phoneCallUrl}
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  backgroundColor: "background.paper",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  px: 4,
                  py: 1.6,
                  borderRadius: "50px",
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "primary.dark",
                    backgroundColor: "action.hover",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                [שיחה טלפונית]
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
