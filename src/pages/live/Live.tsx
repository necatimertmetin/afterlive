import { Box, Container, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { Stories } from "./components/carousel/Stories";
import { useEvents } from "../../hooks/useEvents";

export const Live = () => {
  const Events = useEvents();
  const liveEvents = Events.filter((event) => event.isLive);

  const [selectedId, setSelectedId] = useState<number>(
    liveEvents.length > 0 ? liveEvents[0].id : 0
  );

  // Seçilen event objesi
  const selectedEvent = liveEvents.find((e) => e.id === selectedId);

  return (
    <Box my={4}>
      {/* Arka plan efekt */}
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

      {/* Stories carousel */}
      <Box mb={4} sx={{ backgroundColor: "#00000088" }}>
        <Stories Events={Events} onSelect={setSelectedId} />
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
                  borderRadius: "75px",
                }}
              >
                <video
                  controls
                  autoPlay
                  muted
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                >
                  <source
                    src={selectedEvent.streamUrl}
                    type="application/x-mpegURL"
                  />
                  Your browser does not support the video tag.
                </video>
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
                    borderRadius: "75px",
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
                    borderRadius: "75px",
                  }}
                >
                  <img
                    src={selectedEvent.image}
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
    </Box>
  );
};
