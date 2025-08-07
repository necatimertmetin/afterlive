import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Stories } from "./components/carousel/stories";
import { mockData } from "./components/data"; // import edildi

export const Live = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selected = mockData[selectedId];

  return (
    <Box sx={{ width: "100%", padding: "20px 0" }}>
      <Stories
        stories={mockData}
        onSelect={(id: number) => setSelectedId(id)}
      />
      <Grid container mx={20} spacing={2}>
        <Grid
          size={{ xs: 12, sm: 8 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <video width="100%" height="auto" controls>
            <source src={selected.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <img
            src={selected.locationImg}
            alt="location"
            style={{ width: "100%", marginBottom: 12 }}
          />
          <img
            src={"https://picsum.photos/200/150?random=3"}
            alt="extra"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
