import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Stories } from "./components/carousel/Stories";
import { useEvents } from "../../hooks/useEvents";
import { useTranslate } from "../../hooks/useTranslation";

export const Live = () => {
  const Events = useEvents();
  const { translate } = useTranslate("pages.live");
  // isLive kontrolünü component içinde yapıyoruz
  const liveEvents = useMemo(() => {
    const now = new Date();
    return Events.map((e) => {
      const eventDate = new Date(e.date);
      const diffHours =
        (now.getTime() - eventDate.getTime()) / (1000 * 60 * 60);
      // Event şimdi veya 3 saat öncesi ise live kabul et
      return { ...e, isLive: diffHours >= 0 && diffHours <= 3 };
    }).filter((e) => e.isLive);
  }, [Events]);

  const [selectedId, setSelectedId] = useState<number>(0);

  // Eğer liveEvents varsa ve selectedId geçerli değilse, ilk liveEvent'i seç
  useEffect(() => {
    if (liveEvents.length > 0 && !liveEvents.find((e) => e.id === selectedId)) {
      setSelectedId(liveEvents[0].id);
    }
  }, [liveEvents, selectedId]);

  const selectedEvent = liveEvents.find((e) => e.id === selectedId);

  return (
    <Box my={4}>
      <Box
        my={4}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 0px,
            rgba(255, 0, 0, 1) 2px,
            transparent 2px,
            transparent 200px
          )`,
          filter:
            "drop-shadow(0 0 4px red) drop-shadow(0 0 12px red) drop-shadow(0 0 24px red) drop-shadow(0 0 48px red)",
          animation: "move 3s linear infinite",
          zIndex: -1,
          "@keyframes move": {
            from: { backgroundPosition: "0 0" },
            to: { backgroundPosition: "0 0" },
          },
        }}
      />

      {liveEvents.length === 0 ? (
        // Hiç canlı yayın yoksa burası çalışır
        <Container sx={{ py: 10 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 5,
              textAlign: "center",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 3,
              borderColor: (theme) => theme.palette.primary.main,
              gap: 5,
            }}
          >
            <Typography variant="h3" gutterBottom>
              🚦{translate("noStream")}🚦
            </Typography>
          </Paper>
        </Container>
      ) : (
        <>
          {/* Stories carousel */}
          <Box mb={4} sx={{ backgroundColor: "#00000088" }}>
            <Stories Events={liveEvents} onSelect={setSelectedId} />
          </Box>

          {/* Main Content */}
          <Container sx={{ py: 5 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              {/* Video Player */}
              <Box sx={{ flex: 2 }}>
                {selectedEvent && (
                  <Paper
                    elevation={6}
                    sx={{
                      width: "100%",
                      aspectRatio: "16/9",
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`https://player.twitch.tv/?channel=${selectedEvent.channel}&parent=${window.location.hostname}&muted=true&autoplay=true`}
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    ></iframe>
                  </Paper>
                )}
              </Box>

              {/* Sidebar: Map + Görsel */}
              <Stack spacing={2} sx={{ flex: 1 }}>
                {selectedEvent && (
                  <>
                    <Paper
                      elevation={6}
                      sx={{
                        width: "100%",
                        aspectRatio: "4/2",
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        src={selectedEvent.location}
                        title="Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(1) invert(1)" }}
                        allowFullScreen
                      ></iframe>
                    </Paper>

                    <Paper
                      elevation={6}
                      sx={{
                        width: "100%",
                        aspectRatio: "8/5",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={
                          "https://www.afterlive.cloud/images/locations/" +
                          selectedEvent.image
                        }
                        alt={selectedEvent.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Paper>
                  </>
                )}
              </Stack>
            </Stack>
          </Container>
        </>
      )}
    </Box>
  );
};
