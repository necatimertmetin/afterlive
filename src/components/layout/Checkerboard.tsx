import React from "react";
import { Box, useTheme } from "@mui/material";

interface AfterLiveBackgroundProps {
  children?: React.ReactNode;
  squareSize?: number;
}

export const CheckerboardBox: React.FC<AfterLiveBackgroundProps> = ({
  children,
  squareSize = 120,
}) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  // Temaya göre renkleri ayarla
  const darkSquares = isLight ? "#ddd" : "#000";
  const lightSquares = isLight ? "#aaa" : "#111";

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          inset: 0,
          zIndex: 0,

          "--square": `${squareSize}px`,
          backgroundAttachment: "fixed",
          backgroundImage: `conic-gradient(${darkSquares} 25%, ${lightSquares} 0 50%, ${darkSquares} 0 75%, ${lightSquares} 0)`,
          backgroundSize: "var(--square) var(--square)",

          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 100% 100%, rgba(255,0,0,0.9), transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: isLight ? "#000" : "#fff",
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
