import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import logo from "/images/logo/logo.png";
export const Footer = () => {
  return (
    <Box
      component="footer"
      p={5}
      sx={{
        bgcolor: "#0d0d0d",
        color: "#fff",

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
                Anasayfa
              </Typography>
            </Link>
            <Link href="/live" color="inherit" underline="hover">
              <Typography variant="h1" fontWeight={"bold"}>
                Canli
              </Typography>
            </Link>

            <Link href="/contact" color="inherit" underline="hover">
              <Typography variant="h1" fontWeight={"bold"}>
                Iletisim
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>

      {/* Alt Kısım */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color="error" variant="body2">
          © {new Date().getFullYear()} Afterlive. Gecenin ritmi seninle.
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
