import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Grid,
  Chip,
  CircularProgress,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import type { BakeryProduct } from "../types/bakery";
import { fetchProducts } from "../service/productService";

export default function Catalog() {
  const [products, setProducts] = useState<BakeryProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const phoneNumber = "972500000000"; // מספר טלפון להזמנה

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 900, color: "text.primary" }}
        >
          [הקטלוג המתוק שלנו ✨]
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          [בחרו ממגוון המאפים והקינוחים שנאפים באהבה בהזמנה מראש]
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        {products.map((product) => {
          const defaultMsg = encodeURIComponent(
            `[שלום! אשמח לקבל פרטים ולהזמין: ${product.title}]`,
          );
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMsg}`;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  backgroundColor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* תגית מוצר פופולרי */}
                {product.isPopular && (
                  <Chip
                    icon={
                      <StarIcon
                        sx={{
                          fontSize: "16px !important",
                          color: "#1A1F26 !important",
                        }}
                      />
                    }
                    label="[מומלץ]"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      backgroundColor: "secondary.main",
                      color: "secondary.contrastText",
                      fontWeight: 800,
                      zIndex: 2,
                    }}
                  />
                )}

                {/* תמונת המוצר */}
                <CardMedia
                  component="img"
                  height="220"
                  image={product.imageUrl}
                  alt={product.title}
                  sx={{ objectFit: "cover" }}
                />

                {/* תכן הכרטיסייה */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justify: "space-between",
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "text.primary",
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}
                    >
                      {product.description}
                    </Typography>
                  </Box>

                  {/* תחתית הכרטיסייה - מחיר וכפתור הזמנה */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 900, color: "primary.main" }}
                    >
                      ₪{product.price}
                    </Typography>

                    <Button
                      component="a"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="small"
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        backgroundColor: "#25D366",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 2,
                        py: 0.8,
                        "&:hover": {
                          backgroundColor: "#1DA851",
                        },
                      }}
                    >
                      להזמנה
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
