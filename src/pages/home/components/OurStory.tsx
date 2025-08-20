import { Grid, Typography } from "@mui/material";
import { useTranslate } from "../../../hooks/useTranslation";
import { CheckerboardBox } from "../../../components/layout/Checkerboard";

export const OurStory = () => {
  const { translate } = useTranslate("pages.home.ourStory");

  return (
    <CheckerboardBox squareSize={364}>
      {" "}
      {/* mobilde daha küçük kare */}
      <Grid
        container
        justifyContent="center"
        sx={{
          py: { xs: 4, md: 10 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid
          size={{ xs: 12, md: 8, lg: 6 }}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            p: { xs: 2, md: 6 }, // mobilde padding azaltıldı
          }}
        >
          {[1, 2, 3].map((i) => (
            <Typography
              key={i}
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "3rem" }, // mobil font küçültüldü
                mb: 1,
              }}
            >
              {translate(`title${i}`)}
            </Typography>
          ))}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: "3rem" },
              mb: 1,
            }}
          >
            🚦 {translate("brand")} 🚦
          </Typography>
          <Typography
            variant="h3"
            fontWeight={600}
            sx={{ fontSize: { xs: "1.2rem", md: "2rem" }, mt: 2 }}
          >
            {translate("title4")}
          </Typography>
        </Grid>
      </Grid>
    </CheckerboardBox>
  );
};
