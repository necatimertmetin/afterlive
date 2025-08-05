import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import heroImg from "/images/hero/hero.jpeg";

export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh)",
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={{ xs: "center", md: "stretch" }}
        sx={{
          height: "100%",
          px: { xs: 2, sm: 4, md: 7 },
          pl: { xs: 2, sm: 4, md: 20 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          height={{ xs: "auto", md: "100%" }}
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 3, md: 5 }}
          sx={{
            textAlign: { xs: "center", md: "left" },
            py: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: { xs: "100%", md: "60vw" },
              color: (theme) => theme.palette.text.primary,
              lineHeight: { xs: 1.2, md: 1.1 },
            }}
          >
            {translate("title")}
          </Typography>

          <Button size="large" color="inherit" variant="outlined">
            {translate("button")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
