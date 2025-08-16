import { Box, Container, Grid, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";
import type { Event } from "./components/types";
import { Calendar } from "./components/Calendar";

// 🔹 Etkinlik verileri
const mockEvents: Event[] = [
  {
    id: 1,
    title: "Rhythms Live",
    date: "2025-08-16T21:30:00",
    time: "21:30",
    location: "Izmir",
    image: "https://picsum.photos/id/1011/800/450",
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "2025-01-12T20:00:00",
    time: "20:00",
    location: "Ankara",
    image: "https://picsum.photos/id/1015/800/450",
  },
  {
    id: 3,
    title: "Rock Festival",
    date: "2025-02-05T19:00:00",
    time: "19:00",
    location: "Istanbul",
    image: "https://picsum.photos/id/1016/800/450",
  },
  {
    id: 4,
    title: "Electronic Beats",
    date: "2025-02-17T22:00:00",
    time: "22:00",
    location: "Antalya",
    image: "https://picsum.photos/id/1021/800/450",
  },
  {
    id: 5,
    title: "Soul Session",
    date: "2025-03-09T18:30:00",
    time: "18:30",
    location: "Bursa",
    image: "https://picsum.photos/id/1025/800/450",
  },
  {
    id: 6,
    title: "Blues Evening",
    date: "2025-03-21T20:45:00",
    time: "20:45",
    location: "Izmir",
    image: "https://picsum.photos/id/1031/800/450",
  },
  {
    id: 7,
    title: "Folk Fest",
    date: "2025-04-11T17:00:00",
    time: "17:00",
    location: "Ankara",
    image: "https://picsum.photos/id/1035/800/450",
  },
  {
    id: 8,
    title: "Pop Extravaganza",
    date: "2025-04-29T22:30:00",
    time: "22:30",
    location: "Istanbul",
    image: "https://picsum.photos/id/1040/800/450",
  },
];

export const Events = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box display="flex" alignItems="center" mb={3}>
        <Typography component="span" variant="h3" fontWeight="bold">
          Etkinlikler
        </Typography>
        <Typography
          component="span"
          variant="h4"
          fontWeight="bold"
          color="error"
          ml={1}
        >
          ◉
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Sol kısım: Etkinlik Kartları */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Grid container spacing={2}>
            {mockEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 4 }}>
                <EventCard {...event} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sağ kısım: Takvim */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Calendar mockEvents={mockEvents} />
        </Grid>
      </Grid>
    </Container>
  );
};
