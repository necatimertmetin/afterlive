import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import heroImg from "/images/hero/newHeroDark.png";
import heroImgLight from "/images/hero/newHeroLight.png";
export const Hero = () => {
  const { translate } = useTranslate("pages.home.hero");
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 64px)",
        backgroundImage: `url(${
          theme.palette.mode === "dark" ? heroImg : heroImgLight
        })`,
        backgroundPosition: "center",
        backgroundSize: "concovertain",
      }}
    >
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
            <Typography fontWeight={600}>{translate("button")}</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
