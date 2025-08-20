import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";
import { Calendar } from "./components/Calendar";
import { useEvents } from "../../hooks/useEvents";
import { useTranslate } from "../../hooks/useTranslation";

export const Events = () => {
  const events = useEvents();
  const { translate } = useTranslate("pages.events");
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
          {translate("title")}
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
            <Paper
              sx={{
                p: 5,
                textAlign: "center",
                minHeight: "50vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Typography variant="h3" gutterBottom>
                🚦{translate("noEvents")}🚦
              </Typography>
            </Paper>
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
