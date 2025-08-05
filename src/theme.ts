import type { ButtonProps } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Özel palette genişletme
declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      box: string;
    };
    highlightedRow: {
      main: string;
    };
  }

  interface PaletteOptions {
    customBackground?: {
      box: string;
    };
    highlightedRow?: {
      main: string;
    };
  }
}

// 🎧 Light Theme – Beyaz & Kırmızı Radyo Teması
const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D32F2F", // Radyo kırmızısı
      light: "#FF6659",
      dark: "#9A0007",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFC107", // Enerjik sarı vurgu (istersen kaldırılabilir)
    },
    background: {
      default: "#FAFAFA", // Açık arka plan
      paper: "#ffffff", // Kart zemin
    },
    text: {
      primary: "#1B1B1B", // Koyu gri
      secondary: "#555555", // Yardımcı yazılar
    },
    customBackground: {
      box: "#FFF5F5", // Kırmızımsı açık kutu rengi
    },
    highlightedRow: {
      main: "#FFEBEE", // Açık pembe satır vurgusu
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: `"Montserrat", sans-serif`,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          height: "64px",
          color: "#D32F2F",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FAFAFA",
          color: "#1B1B1B",
        },
        "main.MuiBox-root": {
          backgroundColor: "#FFF5F5",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
  },
});

// 🎧 Dark Theme – Siyah & Kırmızı Radyo Teması
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF3D3D", // Parlak kırmızı
      light: "#FF6E6E",
      dark: "#B71C1C",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E53935", // Kırmızı vurgu tonu
    },
    background: {
      default: "#0B0B0B", // Saf siyah arka plan
      paper: "#161616", // Kartlar
    },
    text: {
      primary: "#ccc",
      secondary: "#B0B0B0",
    },
    customBackground: {
      box: "#1C1C1C",
    },
    highlightedRow: {
      main: "#2C2C2C",
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#161616",
          height: "64px",
          color: "#FF3D3D",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B0B0B",
          color: "#ffffff",
        },
        "main.MuiBox-root": {
          backgroundColor: "#1C1C1C",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: `"Montserrat", sans-serif`,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#ffffff",
              backgroundColor: "#FF3D3D",
              "&:hover": {
                backgroundColor: "#D32F2F",
              },
            }),
        }),
      },
    },
  },
});

// Responsive hale getir
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);
const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);

// Export
export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
