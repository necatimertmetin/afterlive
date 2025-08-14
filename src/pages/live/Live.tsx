import { useMemo, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Stories } from "./components/carousel/Stories";
import { mockData } from "./components/data";

export const Live = () => {
  const [selectedId, setSelectedId] = useState(0);

  // Sadece selectedId değiştiğinde yeniden hesaplanır
  const selected = useMemo(() => mockData[selectedId], [selectedId]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #111)",
        color: "#fff",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Story Çubuğu */}
      <Box mb={4}>
        <Stories
          stories={mockData}
          onSelect={(id: number) => setSelectedId(id)}
        />
      </Box>

      <Grid
        container
        spacing={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container size={{ xs: 12, md: 7 }}>
          <Grid
            size={{ xs: 12, md: 8 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box position="relative" width="100%">
              {/* LIVE Etiketi */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  backgroundColor: "rgba(255,0,0,0.85)",
                  color: "white",
                  px: 1.5,
                  py: 0.5,
                  fontWeight: "bold",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  boxShadow: "0 0 10px rgba(255,0,0,0.6)",
                  zIndex: 2,
                }}
              >
                LIVE
              </Box>
              <video
                width="100%"
                height="auto"
                controls
                style={{
                  borderRadius: "50px",
                  boxShadow: "0 0 25px rgba(0,0,0,0.3)",
                }}
              >
                <source src={selected.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>

          {/* Sağ Panel */}
          <Grid size={{ xs: 12, md: 3.5 }}>
            {/* Lokasyon Görseli */}
            <Box
              sx={{
                borderRadius: "50px",
                overflow: "hidden",
                mb: 2,
                position: "relative",
                "& img": { width: "100%", display: "block" },
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease",
              }}
            >
              <img src={selected.locationImg} alt="location" />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: 8,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  px: 1,
                  py: 0.3,
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                }}
              >
                {selected.label}
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "50px",
                overflow: "hidden",
                "& img": { width: "100%", display: "block" },
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease",
              }}
            >
              <img src="https://picsum.photos/400/250?random=3" alt="extra" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
