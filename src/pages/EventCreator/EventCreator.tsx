import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Chip,
  Stack,
  Alert,
  Box,
  Fade,
  useTheme,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Event as EventIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Tv as TvIcon,
  Add as AddIcon,
} from "@mui/icons-material";

interface EventData {
  id: number;
  title: string;
  date: string;
  city: string;
  venueName: string;
  location: string;
  image: string;
  description: string;
  channel: string;
}

const defaultForm = {
  title: "",
  date: new Date().toISOString().split("T")[0],
  time: new Date().toTimeString().slice(0, 5),
  city: "",
  venueName: "",
  location: "",
  image: "",
  description: "",
  channel: "worldoftanks",
};

export const EventCreator = () => {
  const theme = useTheme();
  const [events, setEvents] = useState<Record<number, EventData>>({});
  const [nextId, setNextId] = useState(1);
  const [form, setForm] = useState(defaultForm);

  const cities = ["İzmir", "Ankara", "Istanbul", "Antalya", "Bursa"];
  const channels = ["worldoftanks", "videoyun"];

  const handleChange = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: EventData = {
      id: nextId,
      title: form.title || `Etkinlik ${nextId}`,
      date: `${form.date}T${form.time}:00`,
      city: form.city,
      venueName: form.venueName,
      location:
        form.location || "https://www.google.com/maps/embed?pb=!1m18!...",
      image: form.image || `https://picsum.photos/id/${1000 + nextId}/800/450`,
      description: form.description || "Harika bir etkinlik",
      channel: form.channel,
    };

    setEvents((prev) => ({ ...prev, [nextId]: newEvent }));
    setNextId((id) => id + 1);
    setForm(defaultForm);
  };

  const deleteEvent = (id: number) =>
    setEvents((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(events, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "events.json";
    link.click();
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const eventCount = Object.keys(events).length;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      {/* Form */}
      <Card
        sx={{
          mb: 4,
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EventIcon sx={{ mr: 2, color: "primary.main", fontSize: 32 }} />
            <Typography variant="h4" fontWeight={700} color="primary">
              Yeni Etkinlik Ekle
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Etkinlik Başlığı"
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth required>
                  <InputLabel>Şehir</InputLabel>
                  <Select
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  >
                    {cities.map((c) => (
                      <MenuItem key={c} value={c}>
                        <LocationIcon sx={{ mr: 1, fontSize: 18 }} />
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  type="date"
                  label="Tarih"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  type="time"
                  label="Saat"
                  value={form.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Mekan Adı"
                  value={form.venueName}
                  onChange={(e) => handleChange("venueName", e.target.value)}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Google Maps URL"
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Resim URL"
                  value={form.image}
                  onChange={(e) => handleChange("image", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Açıklama"
                  multiline
                  rows={4}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel>Kanal</InputLabel>
                  <Select
                    value={form.channel}
                    onChange={(e) => handleChange("channel", e.target.value)}
                  >
                    {channels.map((ch) => (
                      <MenuItem key={ch} value={ch}>
                        <TvIcon sx={{ mr: 1, fontSize: 18 }} />
                        {ch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AddIcon />}
                  fullWidth
                >
                  Etkinlik Ekle
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Events */}
      {eventCount > 0 ? (
        <Fade in>
          <Card
            sx={{
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color="primary"
                    mr={2}
                  >
                    Kaydedilen Etkinlikler
                  </Typography>
                  <Chip label={eventCount} color="primary" />
                </Box>
                <Button
                  onClick={exportJSON}
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  JSON İndir
                </Button>
              </Box>

              <Stack spacing={3}>
                {Object.values(events).map((ev) => (
                  <Paper
                    key={ev.id}
                    sx={{ p: 3, borderRadius: 2, position: "relative" }}
                  >
                    <IconButton
                      onClick={() => deleteEvent(ev.id)}
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        color: "error.main",
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      color="primary"
                      gutterBottom
                    >
                      {ev.title}
                    </Typography>
                    <Box>
                      <LocationIcon sx={{ mr: 1, color: "primary.main" }} />
                      {ev.city} - {ev.venueName}
                    </Box>
                    <Box>
                      <ScheduleIcon sx={{ mr: 1, color: "primary.main" }} />
                      {formatDate(ev.date)}
                    </Box>
                    <Box>
                      <TvIcon sx={{ mr: 1, color: "primary.main" }} />
                      <Chip label={ev.channel} size="small" />
                    </Box>
                    <Typography sx={{ mt: 2 }}>{ev.description}</Typography>
                  </Paper>
                ))}
              </Stack>

              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" gutterBottom>
                JSON Çıktısı:
              </Typography>
              <Paper sx={{ p: 2, maxHeight: 400, overflow: "auto" }}>
                <Typography
                  component="pre"
                  sx={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                >
                  {JSON.stringify(events, null, 2)}
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        </Fade>
      ) : (
        <Alert severity="info" sx={{ mt: 4 }}>
          Henüz etkinlik eklenmedi. Yukarıdaki formu kullanarak ilk
          etkinliğinizi ekleyin! 🎵
        </Alert>
      )}
    </Container>
  );
};
