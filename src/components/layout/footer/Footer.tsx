import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import logo from "/images/logo/logo.png";
import { useTranslate } from "../../../hooks/useTranslation";
export const Footer = () => {
  const { translate } = useTranslate("layout.footer");
  return (
    <Box
      component="footer"
      p={5}
      sx={{
        borderTop: "5px solid #ff0000",
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={logo} />
        </Grid>

        {/* Hızlı Linkler */}
        <Grid size={{ xs: 12, md: 4 }} mb={10}>
          <Stack spacing={1}>
            <Link href="/" color="inherit" underline="hover">
              <Typography variant="h1" fontWeight={"bold"}>
                {translate("quickLinks.home")}
              </Typography>
            </Link>
            <Link href="/live" color="inherit" underline="hover">
              <Typography variant="h1" fontWeight={"bold"}>
                {translate("quickLinks.live")}
              </Typography>
            </Link>

            <Link href="/contact" color="inherit" underline="hover">
              <Typography variant="h1" fontWeight={"bold"}>
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
        <Stack direction={"row"} spacing={2}>
          <Typography color="error" variant="body2">
            LinkedIn
          </Typography>
          <Typography color="error" variant="body2">
            Twitter
          </Typography>
          <Typography color="error" variant="body2">
            Instagram
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
