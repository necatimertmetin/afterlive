import { Stack, Typography, Box } from "@mui/material";
import { useTranslate } from "../../hooks/useTranslation";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

type SpacerProps = {
  imageUrl: string;
};

export const Spacer = ({ imageUrl }: SpacerProps) => {
  useTranslate("pages.home.ourStory");
  const liveBars = 8;
  const comingSoon = 5;
  const events = 12;
  const stats = [
    {
      icon: <LocalBarIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `${liveBars} BAR YAYINDA`,
    },
    {
      icon: <LocalActivityIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `${events} ETKİNLİK HER HAFTA`,
    },
    {
      icon: <AccessTimeIcon sx={{ color: "#ff0000", fontSize: 30 }} />,
      text: `${comingSoon} MEKAN YAKINDA`,
    },
  ];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "60vh",
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          py: { xs: 5, md: 8 },
          px: { xs: 3, md: 6 },
          minHeight: "40vh",
          position: "relative", // overlay üstünde durması için
          zIndex: 2,
          color: "#fff", // yazı rengini net beyaz yap
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          textAlign="center"
          mb={4}
          sx={{ letterSpacing: 2 }}
        >
          ŞU AN İZMİR'DE
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
          maxWidth={900}
          mx="auto"
        >
          {stats.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid #ff0000",
                pb: 2,
                flex: 1,
              }}
            >
              <Box sx={{ mr: 2 }}>{item.icon}</Box>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ userSelect: "none" }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Typography
          variant="body1"
          textAlign="center"
          mt={5}
          sx={{ opacity: 0.6, maxWidth: 600, mx: "auto" }}
        >
          Şehrin en ateşli noktaları canlı yayında. Daha fazlası çok yakında
          sizlerle!
        </Typography>
      </Box>
    </Stack>
  );
};
