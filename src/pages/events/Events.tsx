import { Box, Container, Grid, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";
import type { Event } from "./components/types";

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Rhythms Live",
    date: "24",
    month: "DEC",
    time: "21:30",
    location: "Izmir",
    image: "https://picsum.photos/id/1011/800/450",
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "12",
    month: "JAN",
    time: "20:00",
    location: "Ankara",
    image: "https://picsum.photos/id/1015/800/450",
  },
  {
    id: 3,
    title: "Rock Festival",
    date: "05",
    month: "FEB",
    time: "19:00",
    location: "Istanbul",
    image: "https://picsum.photos/id/1016/800/450",
  },
  {
    id: 4,
    title: "Electronic Beats",
    date: "17",
    month: "FEB",
    time: "22:00",
    location: "Antalya",
    image: "https://picsum.photos/id/1021/800/450",
  },
  {
    id: 5,
    title: "Soul Session",
    date: "09",
    month: "MAR",
    time: "18:30",
    location: "Bursa",
    image: "https://picsum.photos/id/1025/800/450",
  },
  {
    id: 6,
    title: "Blues Evening",
    date: "21",
    month: "MAR",
    time: "20:45",
    location: "Izmir",
    image: "https://picsum.photos/id/1031/800/450",
  },
  {
    id: 7,
    title: "Folk Fest",
    date: "11",
    month: "APR",
    time: "17:00",
    location: "Ankara",
    image: "https://picsum.photos/id/1035/800/450",
  },
  {
    id: 8,
    title: "Pop Extravaganza",
    date: "29",
    month: "APR",
    time: "22:30",
    location: "Istanbul",
    image: "https://picsum.photos/id/1040/800/450",
  },
];

export const Events = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography component={"span"} variant="h1" fontWeight="bold">
        Etkinlikler
      </Typography>
      <Typography
        component={"span"}
        variant="h4"
        fontWeight="bold"
        color="primary"
      >
        ◉
      </Typography>
      <Box mt={5}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems={"stretch"}
        >
          {mockEvents.map((event) => (
            <Grid key={event.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <EventCard {...event} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
