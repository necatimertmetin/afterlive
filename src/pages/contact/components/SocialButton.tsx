import { Stack, useTheme } from "@mui/material";
import React from "react";
import type { IconBaseProps } from "react-icons";

interface SocialButtonProps {
  icon: React.ReactElement<IconBaseProps>;
  size?: number;
  bgColor?: string;
}

export const SocialButton = ({
  icon,
  size = 42,
  bgColor = "#ff0000",
}: SocialButtonProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        backgroundColor: bgColor,
        maxWidth: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.background.default,
        p: 1,
        cursor: "pointer",
        transition: "background-color 0.4s ease",
        "&:hover": {
          backgroundColor: "transparent",
          color: theme.palette.primary.main,
        },
      }}
    >
      {React.cloneElement(icon, { size })}
    </Stack>
  );
};
