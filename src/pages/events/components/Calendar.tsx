import { Paper, Box, IconButton, Typography, Grid } from "@mui/material";
import { tr } from "date-fns/locale";
import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  format,
  isSameDay,
} from "date-fns";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import type { Event } from "./types";

type Props = { mockEvents: Event[] };

export const Calendar = ({ mockEvents }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Ay içindeki gerçek günler
  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: startDate, end: endDate });

  // Haftanın günü (Pzt=0 ... Pzr=6) — JS getDay() Pzr=0 verir; Pzt-önde sisteme çeviriyoruz
  const firstDayIndex = (startDate.getDay() + 6) % 7;
  const leadingBlanks = Array.from(
    { length: firstDayIndex },
    (_, i) => `lead-${i}`
  );

  const totalCells = leadingBlanks.length + monthDays.length;
  const trailingBlanks = (7 - (totalCells % 7)) % 7; // 0..6
  const trailingKeys = Array.from(
    { length: trailingBlanks },
    (_, i) => `trail-${i}`
  );

  const eventDates = mockEvents.map((ev) => new Date(ev.date));

  return (
    <Paper variant="outlined" sx={{ borderRadius: 5 }}>
      {/* Yıl */}
      <Typography variant="h5" textAlign={"center"}>
        {format(currentMonth, "yyyy", { locale: tr })}
      </Typography>

      {/* Ay ve navigasyon */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderTop="2px solid #d32f2f"
        borderBottom="2px solid #d32f2f"
        mb={1}
      >
        <IconButton
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <Typography variant="h6">
          {format(currentMonth, "MMMM", { locale: tr }).toUpperCase()}
        </Typography>
        <IconButton
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          sx={{ color: "white" }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      {/* Gün başlıkları */}
      <Grid container>
        {["PZT", "SAL", "ÇAR", "PER", "CUM", "CMT", "PZR"].map((d) => (
          <Grid size={{ xs: 12 / 7 }} key={d}>
            <Typography
              textAlign={"center"}
              variant="body2"
              sx={{ color: "#aaa" }}
            >
              {d}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Hücreler: baştaki boşlar + günler + sondaki boşlar */}
      <Grid container>
        {/* Leading boşlar */}
        {leadingBlanks.map((k) => (
          <Grid size={{ xs: 12 / 7 }} key={k}>
            <Box sx={{ m: "4px", p: "8px 0", height: 32 }} />
          </Grid>
        ))}

        {/* Ay günleri */}
        {monthDays.map((day) => {
          const isEventDay = eventDates.some((d) => isSameDay(d, day));
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          return (
            <Grid size={{ xs: 12 / 7 }} key={day.toISOString()}>
              <Box
                onClick={() => setSelectedDate(day)}
                sx={{
                  textAlign: "center",
                  m: "4px",
                  p: "6px 0",
                  cursor: "pointer",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  color:
                    isSelected || isEventDay
                      ? (theme) => theme.palette.primary.main
                      : "white",
                  "&:hover": { color: "error.main" },
                }}
              >
                <Typography variant="h5"> {format(day, "d")}</Typography>
              </Box>
            </Grid>
          );
        })}

        {/* Trailing boşlar */}
        {trailingKeys.map((k) => (
          <Grid size={{ xs: 12 / 7 }} key={k}>
            <Box sx={{ m: "4px", p: "8px 0", height: 32 }} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
