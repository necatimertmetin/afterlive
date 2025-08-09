import { Grid } from "@mui/material";
import { EventCard } from "./components/EventCard";

export const Events = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
      <Grid size={{ xs: 2 }}>
        <EventCard />
      </Grid>
    </Grid>
  );
};
