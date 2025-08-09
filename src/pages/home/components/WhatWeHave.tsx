import { Box, Typography, Stack } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const WhatWeHave = () => {
  const liveBars = 8;
  const comingSoon = 5;
  const nextCity = "Bursa'da";

  const stats = [
    {
      icon: <LocalBarIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `${liveBars} BAR YAYINDA`,
    },
    {
      icon: <AccessTimeIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `${comingSoon} MEKAN YAKINDA`,
    },
    {
      icon: <LocationOnIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `YAKINDA ${nextCity.toUpperCase()}`,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 6 },
        backgroundColor: "#000",
        minHeight: "40vh",
        color: "#fff",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={900}
        textAlign="center"
        mb={4}
        sx={{ letterSpacing: 2 }}
      >
        ŞU AN ŞEHİRDE
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 6 }}
        justifyContent="center"
        maxWidth={900}
        mx="auto"
      >
        {stats.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom:
                index !== stats.length - 1 ? "2px solid #ff0000" : "none",
              pb: 2,
              flex: 1,
            }}
          >
            <Box sx={{ mr: 2 }}>{item.icon}</Box>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ userSelect: "none" }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Typography
        variant="body1"
        textAlign="center"
        mt={5}
        sx={{ opacity: 0.6, maxWidth: 600, mx: "auto" }}
      >
        Şehrin en ateşli noktaları canlı yayında. Daha fazlası çok yakında
        sizlerle!
      </Typography>
    </Box>
  );
};
