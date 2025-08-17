import { Box, Container, Grid, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";
import { Calendar } from "./components/Calendar";
import { useEvents } from "../../hooks/useEvents";

export const Events = () => {
  const events = useEvents();

  const today = new Date();
  today.setHours(0, 0, 0, 0); // sadece tarih kısmını alıyoruz

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0); // karşılaştırma için saatleri sıfırlıyoruz
    return eventDate >= today;
  });
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

      <Grid container spacing={4} alignItems={"stretch"}>
        {/* Sol kısım: Etkinlik Kartları */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Grid container spacing={2}>
            {upcomingEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 4 }}>
                <EventCard {...event} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sağ kısım: Takvim */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Calendar events={events} />
        </Grid>
      </Grid>
    </Container>
  );
};
