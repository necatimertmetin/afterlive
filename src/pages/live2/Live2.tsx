import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Stories } from "../live/components/carousel/Stories";
import { mockData } from "../live/components/data";

export const Live2 = () => {
  const [selectedId, setSelectedId] = useState(0);
  console.log(selectedId);
  // Sadece selectedId değiştiğinde yeniden hesaplanır
  return (
    <Box my={4}>
      <Box mb={4}>
        <Stories
          stories={mockData}
          onSelect={(id: number) => setSelectedId(id)}
        />
      </Box>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Box
          sx={{
            borderRight: "2px solid red",
            height: "480px",
            width: "853px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={0.5}
            sx={{ ml: 1, mt: 1, position: "absolute" }}
          >
            <Typography color="primary" variant="h6">
              ◉
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              LIVE
            </Typography>
          </Stack>
          <img
            src={
              "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg"
            }
            width={"100%"}
          />
        </Box>
        <Stack sx={{ height: "480px", width: "256px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1301562970202!2d27.115552562489405!3d38.45222019675594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xf368a789a9dce0b9!2sDurock!5e0!3m2!1str!2sus!4v1754737583019!5m2!1str!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(100%) grayscale(1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
