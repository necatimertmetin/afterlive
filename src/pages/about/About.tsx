import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../hooks/useTranslation";
import aboutImg from "/images/about/1.jpg";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";

// En üst kısım aynı kalabilir (importlar vs.)

export const About = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.about");

  const features = [
    {
      icon: <LiveTvIcon />,
      title: translate("features.live.title"),
      description: translate("features.live.description"),
      color: "#E53935",
    },
    {
      icon: <MusicNoteIcon />,
      title: translate("features.dj.title"),
      description: translate("features.dj.description"),
      color: "#8E24AA",
    },
    {
      icon: <PeopleIcon />,
      title: translate("features.community.title"),
      description: translate("features.community.description"),
      color: "#039BE5",
    },
    {
      icon: <FavoriteIcon />,
      title: translate("features.vision.title"),
      description: translate("features.vision.description"),
      color: "#FB8C00",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {translate("title")}{" "}
            {/* AFTER•LIVE — Ritmi Yakala, Enerjiyi Hisset */}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {translate("subtitle")}{" "}
            {/* Gerçek bir gece, asla planlanmaz, yaşanır. */}
          </Typography>
        </Box>

        {/* Story Section */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{
                height: "100%",
                backdropFilter: "blur(10px)",
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.3)"
                }`,
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                  {translate("story.title")} {/* Hikayemiz */}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {translate("story.paragraph1")}{" "}
                  {/* Her şey "After nerede?" sorusuyla başladı. */}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {translate("story.paragraph2")}{" "}
                  {/* Paint'te çizilen ilk fikir, bir kazadan doğan zamanla birleşti. */}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {translate("story.paragraph3")}{" "}
                  {/* Sahibinden'de ilanlar, test yayınları, pes etmeyen ekip. */}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {translate("story.paragraph4")}{" "}
                  {/* Gerçek bir gece, asla planlanmaz, yaşanır. */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{
                height: { xs: "300px", sm: "400px", lg: "100%" },
                minHeight: { lg: "500px" },
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={aboutImg}
                alt={translate("story.imageAlt")} // AFTER•LIVE ekibi ya da bir sahne görüntüsü
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Card>
          </Grid>
        </Grid>

        {/* Features */}
        <Box>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: theme.palette.text.primary,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            {translate("featuresTitle")} {/* Neden AFTER•LIVE? */}
          </Typography>
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background: `linear-gradient(135deg, 
                      ${theme.palette.background.paper} 0%, 
                      ${
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.8)"
                      } 100%)`,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.2)"
                    }`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: theme.shadows[12],
                    },
                  }}
                >
                  <CardContent
                    sx={{ p: { xs: 2.5, sm: 3 }, textAlign: "center" }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: feature.color,
                        width: { xs: 60, sm: 70 },
                        height: { xs: 60, sm: 70 },
                        mx: "auto",
                        mb: 2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
