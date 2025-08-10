import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LocationOn as LocationPin } from "@mui/icons-material";
import { useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  time: string;
  location: string;
  image: string;
}

export const EventCard = ({
  title,
  date,
  month,
  time,
  location,
  image,
}: EventCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "20px",
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* Location badge */}
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
        {location}
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
            {month}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 18, sm: 22 }, lineHeight: 1.2 }}
          >
            {date}
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
            Going hard this {month} with your favorite artists
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
