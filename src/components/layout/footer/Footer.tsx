import { Box, Grid, Typography, Link, Stack, useTheme } from "@mui/material";
import logoDark from "/images/logo/logo-dark.png";
import logoLight from "/images/logo/logo-light.png";
import { useTranslate } from "../../../hooks/useTranslation";
export const Footer = () => {
  const { translate } = useTranslate("layout.footer");
  const theme = useTheme();
  const themeMode = theme.palette.mode;
  return (
    <Box
      component="footer"
      p={5}
      sx={{
        position: "relative",
        borderTop: "5px solid #ff0000",
        background: (theme) => theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundImage: "radial-gradient(circle, black 1px, #33333311 1px)",
          backgroundSize: ".2rem .2rem",
          opacity: 1,
          pointerEvents: "none", // kullanıcı etkileşimini engelle
        }}
      />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={themeMode === "dark" ? logoLight : logoDark}
            height={"256px"}
            style={{ opacity: 0.8, transform: "rotate(-5deg)" }}
          />
        </Grid>

        {/* Hızlı Linkler */}
        <Grid size={{ xs: 12, md: 4 }} mb={10}>
          <Stack spacing={1}>
            <Link href="/" color="inherit" underline="hover">
              <Typography variant="h2" fontWeight={"bold"}>
                {translate("quickLinks.home")}
              </Typography>
            </Link>
            <Link href="/live" color="inherit" underline="hover">
              <Typography variant="h2" fontWeight={"bold"}>
                {translate("quickLinks.live")}
              </Typography>
            </Link>

            <Link href="/contact" color="inherit" underline="hover">
              <Typography variant="h2" fontWeight={"bold"}>
                {translate("quickLinks.contact")}
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>

      {/* Alt Kısım */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color="error" variant="body2">
          {translate("copyright", { year: new Date().getFullYear() })}
        </Typography>
      </Stack>
    </Box>
  );
};
