import { Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../../hooks/useTranslation";

export const OurStory = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.home.ourStory");
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        size={{ xs: 12, md: 8, lg: 6 }}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          borderRadius: 4,
          p: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {translate("title")}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            fontWeight: 400,
          }}
        >
          {translate("description")}
        </Typography>

        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            window.location.href = "/about";
          }}
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            borderWidth: 2,
            borderRadius: 3,
            transition: "all 0.3s ease",
          }}
        >
          {translate("aboutUs")}
        </Button>
      </Grid>
    </Grid>
  );
};
