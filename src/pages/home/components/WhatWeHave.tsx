import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../../hooks/useTranslation";

export const WhatWeHave = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.home.whatWeHave");

  const highlights = [
    translate("option1"),
    translate("option2"),
    translate("option3"),
  ];

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
        size={{ xs: 12 }}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          aligns: "center",
          gap: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography variant="h2">{translate("title")}</Typography>
        <Typography variant="h5">{translate("subtitle")}</Typography>
      </Grid>

      <Grid container spacing={5} sx={{ px: { xs: 2, md: 10 } }}>
        {highlights?.map((highlight, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                width: "100%",
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.3)"
                }`,
                transition: "all 0.3s ease",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px #ff408130`,
                  "& .menu-image": {
                    transform: "scale(1.1)",
                  },
                  "& .menu-button": {
                    transform: "scale(1.05)",
                    background: `linear-gradient(135deg, #ff4081, #ff4081dd)`,
                  },
                },
              }}
            >
              <Box
                component="img"
                src={`https://picsum.photos/200/300`}
                alt={highlight}
                className="menu-image"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  aspectRatio: 1,
                }}
              />
              <CardContent sx={{ p: 3, textAlign: "center" }}>
                <Typography>{highlight}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
