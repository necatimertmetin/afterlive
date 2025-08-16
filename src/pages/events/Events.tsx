import { Box, Container, Grid, Typography } from "@mui/material";
import { EventCard } from "./components/EventCard";
import type { Event } from "./components/types";
import { Calendar } from "./components/Calendar";

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Rhythms Live",
    date: "2025-08-16T21:30:00",
    time: "21:30",
    city: "Izmir",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1011/800/450",
    description: "Energetic live music night",
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "2025-08-29T20:00:00",
    time: "20:00",
    city: "Ankara",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1015/800/450",
    description: "Smooth jazz evening event",
  },
  {
    id: 3,
    title: "Rock Festival",
    date: "2025-02-05T19:00:00",
    time: "19:00",
    city: "Istanbul",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1016/800/450",
    description: "High energy rock festival",
  },
  {
    id: 4,
    title: "Electronic Beats",
    date: "2025-02-17T22:00:00",
    time: "22:00",
    city: "Antalya",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1021/800/450",
    description: "Electronic music party",
  },
  {
    id: 5,
    title: "Soul Session",
    date: "2025-03-09T18:30:00",
    time: "18:30",
    city: "Bursa",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1025/800/450",
    description: "Relaxing soul music",
  },
  {
    id: 6,
    title: "Blues Evening",
    date: "2025-03-21T20:45:00",
    time: "20:45",
    city: "Izmir",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1031/800/450",
    description: "Classic blues night",
  },
  {
    id: 7,
    title: "Folk Fest",
    date: "2025-04-11T17:00:00",
    time: "17:00",
    city: "Ankara",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1035/800/450",
    description: "Traditional folk celebration",
  },
  {
    id: 8,
    title: "Pop Extravaganza",
    date: "2025-04-29T22:30:00",
    time: "22:30",
    city: "Istanbul",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus",
    image: "https://picsum.photos/id/1040/800/450",
    description: "Exciting pop music night",
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

      <Grid container spacing={4} alignItems={"stretch"}>
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
