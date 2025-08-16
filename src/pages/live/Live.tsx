import { Box, Container, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { Stories } from "./components/carousel/Stories";
import { mockData } from "./components/data";

export const Live = () => {
  const [selectedId, setSelectedId] = useState(0);
  console.log(selectedId);
  return (
    <Box my={4}>
      <Box
        my={4}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `repeating-linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0px,
      rgba(255, 0, 0, 1) 2px,
      transparent 2px,
      transparent 200px
    )`,
          filter:
            "drop-shadow(0 0 4px red) drop-shadow(0 0 12px red) drop-shadow(0 0 24px red) drop-shadow(0 0 48px red)",
          animation: "move 3s linear infinite",
          zIndex: -1,
          "@keyframes move": {
            from: { backgroundPosition: "0 0" },
            to: { backgroundPosition: "0 0" }, // aşağıya akış
          },
        }}
      />

      <Box mb={4} sx={{ backgroundColor: "#00000088" }}>
        <Stories
          stories={mockData}
          onSelect={(id: number) => setSelectedId(id)}
        />
      </Box>

      <Container sx={{ py: 5 }}>
        {/* Main Content: Video + Sidebar */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {/* Sol: Video ve Bilgiler */}
          <Box sx={{ flex: 2 }}>
            {/* Video Player */}
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                mb: 2,
                overflow: "hidden",
                borderRadius: "75px",
              }}
            >
              <iframe
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                title={"hey"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </Paper>
          </Box>

          <Stack spacing={2} sx={{ flex: 1 }}>
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                aspectRatio: "4/2",
                overflow: "hidden",
                borderRadius: "75px",
              }}
            >
              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.123456789012!2d32.859742415634!3d39.933363579659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34bbd9b9fef5d5%3A0xb368a789a9dce0b9!2sKızılay!5e0!3m2!1str!2str!4v1754737583020!5m2!1str!2str"
                }
                title="Map"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(1)",
                }}
                allowFullScreen
              ></iframe>
            </Paper>
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                aspectRatio: "8/5",
                overflow: "hidden",
                borderRadius: "75px",
              }}
            >
              <img
                src={"images/locations/IMG-20250809-WA0013.jpg"}
                alt="Event"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
