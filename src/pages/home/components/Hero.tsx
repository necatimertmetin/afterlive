import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import heroImg from "/images/hero/hero.jpeg";

export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 64px)",
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
          <Stack spacing={2}>
            <Typography variant="h3" color="#ffffff">
              {translate("title1")}
            </Typography>
            <Typography variant="h2" color="#ffffff" fontWeight={600}>
              {translate("title2")}
            </Typography>
          </Stack>

          <Button
            sx={{ height: "64px", width: "256px", color: "#ffffff" }}
            color="inherit"
            variant="outlined"
            href="/live"
          >
            <Typography>{translate("button")}</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
