import { createContext, useCallback, useState, type ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ThemeContextType {
  isDark: boolean;
  toggleMode: () => void;
}

const ProjectThemeContext = createContext<null | ThemeContextType>(null);

function ProjectThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  // הגדרת ערכי ה-Theme המותאמים אישית לקונדיטוריה בשימוש צבעי בייבי רכים
  const theme = createTheme({
    direction: "rtl", // כיווניות מימין לשמאל
    palette: {
      mode: isDark ? "dark" : "light",
      ...(isDark
        ? {
            // 🌙 מצב כהה (Dark Bakery Theme) - גווני שוקולד עמוקים ופלטת בייבי זוהרת
            primary: {
              main: "#F472B6", // ורוד בייבי בולט ורך
              dark: "#EC4899",
              light: "#FBCFE8",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#FBBF24", // צהוב-זהב בייבי
              dark: "#F59E0B",
              light: "#FDE68A",
              contrastText: "#1A1F26",
            },
            warning: {
              main: "#F59E0B",
              dark: "#D97706",
              light: "#FEF3C7",
              contrastText: "#1A1F26",
            },
            error: {
              main: "#F87171",
              dark: "#DC2626",
              light: "#FCA5A5",
              contrastText: "#FFFFFF",
            },
            success: {
              main: "#34D399",
              dark: "#059669",
              light: "#6EE7B7",
              contrastText: "#1A1F26",
            },
            background: {
              default: "#120E16", // שוקולד לילה עמוק
              paper: "#1E1826", // כרטיסים צפים בגוון עמוק רך
            },
            action: {
              hover: "rgba(244, 114, 182, 0.08)",
              selected: "rgba(244, 114, 182, 0.16)",
            },
            text: {
              primary: "#FCE7F3", // טקסט ורדרד-לבן קריא
              secondary: "#9CA3AF",
            },
            divider: "#2D2438",
          }
        : {
            // ☀️ מצב בהיר (Light Baby Bakery Theme) - ורוד בייבי, צהוב עדין ושמנת
            primary: {
              main: "#F472B6", // ורוד בייבי רך
              dark: "#EC4899",
              light: "#FCE7F3",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#F59E0B", // צהוב-דבש עדין
              dark: "#D97706",
              light: "#FEF3C7",
              contrastText: "#FFFFFF",
            },
            warning: {
              main: "#FBBF24",
              dark: "#D97706",
              light: "#FEF3C7",
              contrastText: "#1A1F26",
            },
            error: {
              main: "#EF4444",
              dark: "#B91C1C",
              light: "#F87171",
              contrastText: "#FFFFFF",
            },
            success: {
              main: "#10B981",
              dark: "#047857",
              light: "#34D399",
              contrastText: "#FFFFFF",
            },
            background: {
              default: "#FFF0F3", // ורוד בייבי עדין במיוחד
              paper: "#FFFFFF", // כרטיסיות לבנות נקיות
            },
            action: {
              hover: "#FFFBEB", // צהוב בייבי עדין בריחופים
              selected: "rgba(244, 114, 182, 0.12)",
            },
            text: {
              primary: "#374151", // אפור שוקולד כהה וקריא
              secondary: "#6B7280",
            },
            divider: "#FCE7F3",
          }),
    },
    components: {
      // 🥐 הפיכת סדר האלמנטים ב-Chip בלבד (האייקון והטקסט הפוכים בדיוק כפי שאהבת)
      MuiChip: {
        styleOverrides: {
          root: {
            flexDirection: "row-reverse",
          },
          icon: {
            marginLeft: "8px",
            marginRight: "-4px",
          },
        },
      },
      // 🟢 הגדרה רוחבית לכפתורים למניעת הידבקות האייקון לטקסט בעברית
      MuiButton: {
        styleOverrides: {
          startIcon: {
            marginLeft: "8px",
            marginRight: "-4px",
          },
          endIcon: {
            marginRight: "8px",
            marginLeft: "-4px",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            border: "1px solid",
            borderColor: theme.palette.divider,
            transition: "all 0.2s ease-in-out",
          }),
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#EC4899",
            },
          },
        },
      },
    },
  });

  const toggleMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <ProjectThemeContext.Provider value={{ isDark, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ProjectThemeContext.Provider>
  );
}

export { ProjectThemeProvider, ProjectThemeContext, type ThemeContextType };
