import {
  Paper,
  Box,
  IconButton,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { tr, enUS } from "date-fns/locale";
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
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useTranslate } from "../../../hooks/useTranslation";
import type { Event } from "../../../types/Event";
type Props = { events: Event[] };

export const Calendar = ({ events }: Props) => {
  const { getLocale } = useTranslate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const theme = useTheme();
  // Takvimin diline göre locale seçimi
  const locale = getLocale() === "tr" ? tr : enUS;

  // Ay ve günler
  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: startDate, end: endDate });

  // İlk gün indexi: Türkçe -> Pazartesi=0, İngilizce -> Pazar=0
  const firstDayIndex =
    getLocale() === "tr"
      ? (startDate.getDay() + 6) % 7 // Pazartesi = 0
      : startDate.getDay(); // Pazar = 0

  const leadingBlanks = Array.from(
    { length: firstDayIndex },
    (_, i) => `lead-${i}`
  );
  const totalCells = leadingBlanks.length + monthDays.length;
  const trailingBlanks = (7 - (totalCells % 7)) % 7;
  const trailingKeys = Array.from(
    { length: trailingBlanks },
    (_, i) => `trail-${i}`
  );

  const eventDates = events.map((ev) => new Date(ev.startDate));

  // Haftanın günleri
  const weekDays =
    getLocale() === "tr"
      ? ["PZT", "SAL", "ÇAR", "PER", "CUM", "CMT", "PZR"]
      : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 5,
        pb: 10,
      }}
    >
      <Typography variant="h5" textAlign={"center"} sx={{ pt: 1 }}>
        {format(currentMonth, "yyyy", { locale })}
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderTop="2px solid "
        borderBottom="2px solid "
        borderColor={(theme) => theme.palette.primary.main}
        my={1}
      >
        <IconButton onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <NavigateBefore />
        </IconButton>
        <Typography variant="h6">
          {format(currentMonth, "MMMM", { locale }).toUpperCase()}
        </Typography>
        <IconButton onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <NavigateNext />
        </IconButton>
      </Box>

      {/* Gün başlıkları */}
      <Grid container>
        {weekDays.map((d) => (
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

      {/* Hücreler */}
      <Grid container>
        {leadingBlanks.map((k) => (
          <Grid size={{ xs: 12 / 7 }} key={k}>
            <Box sx={{ m: "4px", p: "8px 0", height: 32 }} />
          </Grid>
        ))}

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
                  borderRadius: "8px",
                  color:
                    isSelected || isEventDay
                      ? (theme) => theme.palette.primary.main
                      : "inherit",
                  "&:hover": { color: (theme) => theme.palette.primary.main },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={isSelected || isEventDay ? "600" : "400"}
                  sx={{
                    filter:
                      isSelected || isEventDay
                        ? `drop-shadow(0 0 4px ${theme.palette.primary.main})`
                        : "none",
                    transition: "filter 0.2s",
                  }}
                >
                  {format(day, "d")}
                </Typography>
              </Box>
            </Grid>
          );
        })}

        {trailingKeys.map((k) => (
          <Grid size={{ xs: 12 / 7 }} key={k}>
            <Box sx={{ m: "4px", p: "8px 0", height: 32 }} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
