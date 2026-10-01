import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  alpha,
  useTheme,
} from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      dir="rtl"
      sx={{
        py: 3,
        px: 2,
        mt: "auto", // מבטיח שהפוטר יישאר למטה אם העמוד קצר
        bgcolor: isDark ? alpha("#ffffff", 0.02) : alpha("#000000", 0.01),
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          {new Date().getFullYear()}{" "}
          <Link color="inherit" href="/" sx={{ fontWeight: 600 }}>
            המתוקים של ליה
          </Link>
          {". כל הזכויות שמורות."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
