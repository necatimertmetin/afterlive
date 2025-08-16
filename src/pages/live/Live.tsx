import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Avatar,
  Container,
} from "@mui/material";

interface Channel {
  id: number;
  name: string;
  thumbnail: string;
  streamUrl: string;
  city: string;
  mapUrl: string;
  imageUrl: string;
}

const mockChannels: Channel[] = [
  {
    id: 1,
    name: "Rhythms Live",
    thumbnail: "https://picsum.photos/id/1011/100/100",
    streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    city: "Izmir",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019896502834!2d27.128578215634247!3d38.4237335796595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9b9fef5d507%3A0xa1f368a789a9dce0!2sKonak!5e0!3m2!1str!2str!4v1754737583019!5m2!1str!2str",
    imageUrl: "images/locations/IMG-20250809-WA0012.jpg",
  },
  {
    id: 2,
    name: "Jazz Night",
    thumbnail: "https://picsum.photos/id/1015/100/100",
    streamUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    city: "Ankara",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.123456789012!2d32.859742415634!3d39.933363579659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34bbd9b9fef5d5%3A0xb368a789a9dce0b9!2sKızılay!5e0!3m2!1str!2str!4v1754737583020!5m2!1str!2str",
    imageUrl: "images/locations/IMG-20250809-WA0013.jpg",
  },
  {
    id: 3,
    name: "Rock Festival",
    thumbnail: "https://picsum.photos/id/1016/100/100",
    streamUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    city: "Istanbul",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.987654321012!2d28.974417415634!3d41.008237579659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0c0fef5d57%3A0xc368a789a9dce0b9!2sTaksim!5e0!3m2!1str!2str!4v1754737583021!5m2!1str!2str",
    imageUrl: "images/locations/IMG-20250809-WA0014.jpg",
  },
];

export const Live = () => {
  const [currentChannel, setCurrentChannel] = useState<Channel>(
    mockChannels[0]
  );

  return (
    <Container sx={{ mb: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: "auto", mb: 3, py: 1 }}
      >
        {mockChannels.map((channel) => (
          <Box
            key={channel.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              minWidth: 100,
            }}
            onClick={() => setCurrentChannel(channel)}
          >
            <Box
              sx={{
                border: "solid",
                borderWidth: 4,
                borderColor: (theme) => theme.palette.primary.main,
                borderRadius: "50%",
                p: 0.8,
                mb: 1,
              }}
            >
              <Avatar
                src={channel.thumbnail}
                sx={{
                  width: 90,
                  height: 90,
                }}
              />
            </Box>

            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {channel.name}
            </Typography>
          </Box>
        ))}
      </Stack>

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
            }}
          >
            <iframe
              src={currentChannel.streamUrl}
              title={currentChannel.name}
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
            sx={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}
          >
            <iframe
              src={currentChannel.mapUrl}
              title="Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(1)" }}
              allowFullScreen
            ></iframe>
          </Paper>
          <Paper
            elevation={6}
            sx={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}
          >
            <img
              src={currentChannel.imageUrl}
              alt="Event"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
};
