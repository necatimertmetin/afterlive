import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { EventCard } from "./components/EventCard";
import type { Event } from "./components/types";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { tr } from "date-fns/locale";

// 🔹 Etkinlik verileri
const mockEvents: Event[] = [
  {
    id: 1,
    title: "Rhythms Live",
    date: "2025-12-24T21:30:00",
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
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Takvim aralığı
  const startDate = startOfWeek(startOfMonth(currentMonth), {
    weekStartsOn: 1,
  });
  const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Etkinlik tarihleri
  const eventDates = mockEvents.map((ev) => new Date(ev.date));

  // Seçilen güne göre filtreleme
  const filteredEvents = selectedDate
    ? mockEvents.filter((ev) => isSameDay(new Date(ev.date), selectedDate))
    : mockEvents;

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
            {filteredEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 4 }}>
                <EventCard {...event} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sağ kısım: Takvim */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "#111",
              color: "#fff",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Box display="flex" justifyContent="space-between" mb={2}>
              <IconButton
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                sx={{ color: "white" }}
              >
                <ArrowBackIos fontSize="small" />
              </IconButton>
              <Typography fontWeight="bold">
                {format(currentMonth, "yyyy MMMM", {
                  locale: tr,
                }).toUpperCase()}
              </Typography>
              <IconButton
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                sx={{ color: "white" }}
              >
                <ArrowForwardIos fontSize="small" />
              </IconButton>
            </Box>

            {/* Haftalık başlık */}
            <Grid container>
              {["PZT", "SAL", "ÇAR", "PER", "CUM", "CMT", "PZR"].map((day) => (
                <Grid size={{ xs: 12 / 7 }} key={day}>
                  <Typography variant="body2" sx={{ color: "#aaa" }}>
                    {day}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* Günler */}
            <Grid container>
              {days.map((day) => {
                const isEventDay = eventDates.some((d) => isSameDay(d, day));
                const isSelected = selectedDate && isSameDay(day, selectedDate);

                return (
                  <Grid
                    size={{ xs: 12 / 7 }}
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                  >
                    <Box
                      sx={{
                        m: "4px",
                        p: "8px 0",
                        borderRadius: "50%",
                        cursor: "pointer",
                        bgcolor: isSelected
                          ? "error.main"
                          : isEventDay
                          ? "error.dark"
                          : "transparent",
                        color: isSelected || isEventDay ? "white" : "white",
                        opacity: isSameMonth(day, currentMonth) ? 1 : 0.4,
                        transition: "0.2s",
                        "&:hover": {
                          bgcolor: "error.main",
                        },
                      }}
                    >
                      {format(day, "d")}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
