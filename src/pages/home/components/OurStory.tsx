import { Grid, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";

export const OurStory = () => {
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
          {translate("title1")}
        </Typography>
        <Typography
          variant="h2"
          color={"primary"}
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {translate("title2")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {translate("title3")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          🚦 {translate("brand")}🚦
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          {translate("title4")}
        </Typography>
      </Grid>
    </Grid>
  );
};
