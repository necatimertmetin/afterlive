import { Stack, useTheme } from "@mui/material";
import React from "react";
import type { IconBaseProps } from "react-icons";

interface SocialButtonProps {
  icon: React.ReactElement<IconBaseProps>;
  size?: number;
  bgColor?: string;
  href?: string; // artık opsiyonel
}

export const SocialButton = ({
  icon,
  size = 42,
  bgColor = "#ff0000",
  href,
}: SocialButtonProps) => {
  const theme = useTheme();

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Stack
      onClick={handleClick}
      sx={{
        backgroundColor: bgColor,
        maxWidth: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.background.default,
        p: 1,
        cursor: href ? "pointer" : "default",
        transition: "background-color 0.4s ease",
        "&:hover": {
          backgroundColor: href ? "transparent" : bgColor,
          color: href
            ? theme.palette.primary.main
            : theme.palette.background.default,
        },
      }}
    >
      {React.cloneElement(icon, { size })}
    </Stack>
  );
};
