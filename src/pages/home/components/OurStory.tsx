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
          {translate("title1")}
        </Typography>
        <Typography variant="h3" color="primary" fontWeight={600}>
          {translate("title2")}
        </Typography>
        <Typography variant="h5">
          {translate("description1")}
          <br />
          {translate("description2")}
          <br />
          {translate("description3")}
        </Typography>
      </Grid>
    </Grid>
  );
};
