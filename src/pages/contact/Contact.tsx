import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Paper,
  Avatar,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../hooks/useTranslation";

export const Contact = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.contact");
  const contactItems = [
    {
      icon: <LocationOnIcon />,
      title: translate("address.title"), // "Adres"
      content: translate("address.content"), // "1234 Golbahce Street, Istanbul, Turkey"
      color: "#FF6B6B",
    },
    {
      icon: <AccessTimeIcon />,
      title: translate("hours.title"), // "Çalışma Saatleri"
      content: translate("hours.content"), // "08:00 - 21:00"
      color: "#4ECDC4",
    },
    {
      icon: <PhoneIcon />,
      title: translate("phone.title"), // "Telefon"
      content: translate("phone.content"), // "+90 123 456 7890"
      color: "#45B7D1",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            mb: 2,
          }}
        >
          {translate("title")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            maxWidth: 600,
            mx: "auto",
          }}
        >
          {translate("subtitle")}
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} alignItems="stretch">
        {/* Map Section */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper
            sx={{
              height: { xs: "350px", sm: "450px", md: "500px", lg: "100%" },
              minHeight: { lg: "600px" },
              overflow: "hidden",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "6px",
                zIndex: 1,
              },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5782538958983!2d29.371060500000006!3d40.413044600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca5510211b5d85%3A0xb639e52413522826!2zR8O2bGJhaMOnZSBUZXNpc2xlcmk!5e0!3m2!1str!2str!4v1749325069982!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Golbahce Location"
            />
          </Paper>
        </Grid>

        {/* Contact Info Section */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
            {/* Contact Items */}
            {contactItems.map((item, index) => (
              <Card key={index}>
                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar
                      className="contact-avatar"
                      sx={{
                        bgcolor: item.color,
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        transition: "all 0.3s ease",
                        boxShadow: `0 4px 15px ${item.color}30`,
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box flex={1}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: theme.palette.text.primary,
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          whiteSpace: "pre-line", // 👈 Satır sonlarını uygular
                          wordBreak:
                            item.title === "E-posta"
                              ? "break-all"
                              : "break-word",
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <Card
              sx={{
                mt: { xs: 2, sm: 3 },
              }}
            >
              <CardContent sx={{ textAlign: "center", py: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  {translate("ctaTitle")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {translate("ctaSubtitle")}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
