import { Stack, Typography, Box } from "@mui/material";
import { useMemo } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useTranslate } from "../../hooks/useTranslation";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

export const Spacer = () => {
  const Events = useEvents();
  const { translate } = useTranslate("pages.home.spacer");

  // ---- Live Bars ----
  const liveEvents = useMemo(() => {
    const now = new Date();
    return Events.map((e) => {
      const eventDate = new Date(e.date);
      const diffHours =
        (now.getTime() - eventDate.getTime()) / (1000 * 60 * 60);
      return { ...e, isLive: diffHours >= 0 && diffHours <= 3 };
    }).filter((e) => e.isLive);
  }, [Events]);

  const liveBars = Math.max(liveEvents.length, 3);

  // ---- Weekly Events ----
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneWeekLater = new Date(today);
  oneWeekLater.setDate(today.getDate() + 7);

  const upcomingEvents = Events.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today && eventDate <= oneWeekLater;
  });

  const eventsCount = Math.max(upcomingEvents.length, 12);

  // ---- Coming Soon (sabit) ----
  const comingSoon = 5;

  const stats = [
    {
      icon: <LocalBarIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: translate("liveBars", { count: liveBars }),
    },
    {
      icon: <LocalActivityIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: translate("events", { count: eventsCount }),
    },
    {
      icon: <AccessTimeIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: translate("comingSoon", { count: comingSoon }),
    },
  ];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "60vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          py: { xs: 5, md: 8 },
          px: { xs: 3, md: 6 },
          minHeight: "40vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          textAlign="center"
          mb={4}
          sx={{ letterSpacing: 2 }}
        >
          {translate("title")}
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
                borderBottom: "2px solid #ff0000",
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
          mt={{ xs: 2, md: 10 }}
          sx={{ opacity: 0.6, maxWidth: 600, mx: "auto" }}
        >
          {translate("footer")}
        </Typography>
      </Box>
    </Stack>
  );
};
