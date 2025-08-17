import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LocationOn as LocationPin } from "@mui/icons-material";
import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import type { Event } from "../../../types/Event";

export const EventCard = ({
  title,
  description,
  date,
  time,
  city,
  location,
  image,
}: Event) => {
  const [hovered, setHovered] = useState(false);

  const eventDate = new Date(date);
  const day = format(eventDate, "d", { locale: tr }); // 24
  const month = format(eventDate, "MMM", { locale: tr }); // Ara

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 5,
        width: "100%",
        maxWidth: 280,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "background.paper",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Harita iframe - her zaman altında sabit */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          zIndex: 1,
          filter: "invert(100%) grayscale(1)",
        }}
      >
        <iframe
          src={location}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* City badge */}
      <Box
        sx={{
          position: "absolute",
          mt: 0.5,
          ml: 0.5,
          bgcolor: "rgba(0,0,0,0.6)",
          color: "white",
          px: 1.5,
          py: 0.3,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          zIndex: 10,
          fontSize: { xs: 10, sm: 12 },
          fontWeight: 600,
          pointerEvents: "none",
          userSelect: "none",

          transition: "transform 0.4s ease",
          transform: hovered ? "translateY(-200%)" : "translateY(0)",
        }}
      >
        <LocationPin fontSize="small" />
        {city}
      </Box>

      {/* Resim alanı */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          aspectRatio: "16 / 9",
          objectFit: "cover",

          display: "block",
          position: "relative",
          zIndex: 5,
          transition: "transform 0.4s ease",
          transform: hovered ? "translateY(-100%)" : "translateY(0)",
        }}
      />

      {/* Bilgi alanı */}
      <Stack
        direction="row"
        alignItems="stretch"
        justifyContent="space-between"
        p={2}
        spacing={1}
        sx={{
          transition: "transform 0.4s ease",
          transform: hovered ? "translateY(100%)" : "translateY(0)",
          zIndex: 4,
          position: "relative",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          backgroundColor: "background.paper",
        }}
      >
        {/* Tarih */}
        <Stack alignItems="center" justifyContent="center" px={1}>
          <Typography variant="subtitle2" sx={{ fontSize: { xs: 12, sm: 14 } }}>
            {month.toUpperCase()}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 18, sm: 22 }, lineHeight: 1.2 }}
          >
            {day}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: 10, sm: 12 },
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            {time}
          </Typography>
        </Stack>

        <Divider orientation="vertical" flexItem />

        {/* Bilgi */}
        <Box px={1} flex={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            fontWeight={500}
            sx={{
              fontSize: { xs: 11, sm: 12 },
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
