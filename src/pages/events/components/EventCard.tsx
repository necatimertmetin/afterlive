import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LocationPin } from "@mui/icons-material";

export const EventCard = () => {
  return (
    <Paper
      component={Stack}
      spacing={1}
      sx={{ borderRadius: "20px", width: "300px" }}
    >
      <Box
        sx={{
          borderRadius: "30px",
          overflow: "hidden",
          width: "100%",
          height: "220px",
        }}
      >
        <img
          src={"https://picsum.photos/1920/1080"}
          style={{ height: "100%", objectFit: "contain" }}
          alt="img"
        />
      </Box>
      <Stack
        direction={"row"}
        alignItems={"stretch"}
        maxWidth={"fit-content"}
        justifyContent={"space-between"}
        p={2}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h5">DEC</Typography>
          <Typography variant="h3">24</Typography>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Box>
          <Stack direction={"row"} alignItems={"center"}>
            <LocationPin fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              Izmir
            </Typography>
          </Stack>
          <Typography variant="h5">Rhythms Live</Typography>
          <Typography variant="body2" fontWeight={600}>
            Going hard this December with your favorite artists
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
