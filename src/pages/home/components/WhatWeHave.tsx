import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export const WhatWeHave = () => {
  const bars = [
    {
      name: "Neon Nights Club",
      viewers: 348,
      img: "https://picsum.photos/seed/redclub/600/400",
    },
    {
      name: "Underground Beats",
      viewers: 276,
      img: "https://picsum.photos/seed/redbeats/600/400",
    },
    {
      name: "Skyline Rooftop",
      viewers: 501,
      img: "https://picsum.photos/seed/redsky/600/400",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        minHeight: "100vh",
        background: "#000000",
      }}
    >
      {/* Başlık */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            letterSpacing: 2,
          }}
        >
          CANLI YAYINDAKİ BARLAR
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.7,
          }}
        >
          Şehrin en ateşli mekanları yayında.
        </Typography>
      </Box>

      {/* Kartlar */}
      <Grid container spacing={5} justifyContent="center">
        {bars.map((bar, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                border: "2px solid #ff0000",
                background: "#000000",
                boxShadow: "0 0 20px rgba(255,0,0,0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.03)",
                  boxShadow: "0 0 40px rgba(255,0,0,0.8)",
                },
              }}
            >
              {/* Görsel */}
              <Box
                component="img"
                src={bar.img}
                alt={bar.name}
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  filter: "grayscale(100%) brightness(0.5)",
                  transition: "filter 0.3s ease",
                  "&:hover": { filter: "grayscale(0%) brightness(0.8)" },
                }}
              />

              {/* LIVE etiketi */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "#ff0000",
                  px: 2,
                  py: 0.5,
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  animation: "pulse 1.5s infinite",
                  "@keyframes pulse": {
                    "0%": { boxShadow: "0 0 0 0 rgba(255,0,0,0.7)" },
                    "70%": { boxShadow: "0 0 0 10px rgba(255,0,0,0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(255,0,0,0)" },
                  },
                }}
              >
                LIVE
              </Box>

              {/* İzleyici sayısı */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#000000",
                  px: 2,
                  py: 0.5,
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontWeight: 500,
                  border: "1px solid #ff0000",
                }}
              >
                <PeopleAltIcon fontSize="small" />
                {bar.viewers}
              </Box>

              {/* Bilgiler */}
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {bar.name}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    background: "#ff0000",
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 3,

                    border: "2px solid transparent",
                    fontWeight: 700,
                    "&:hover": {
                      background: "#000000",
                      color: "#ff0000",
                      border: "2px solid #ff0000",
                    },
                  }}
                >
                  İzlemeye Başla
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
