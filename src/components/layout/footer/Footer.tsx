import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTranslate } from "../../../hooks/useTranslation";
import { ROUTES } from "../../../routes/Routes";

export const Footer = () => {
  const theme = useTheme();
  const { translate } = useTranslate("layout.footer");

  const quickLinks = ROUTES.filter((r) => r.showInFooter).map((r) => ({
    name: translate(`quickLinks.${r.labelKey}`),
    href: r.path,
  }));

  const workingHours = [
    {
      day: translate("workingHours.monday"),
      time: translate("workingHours.closed"),
    },
    {
      day: translate("workingHours.tueSun"),
      time: translate("workingHours.hours"),
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
            : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
              : "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Stack spacing={3}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 400,
                }}
              >
                {translate("brand")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                  maxWidth: 300,
                }}
              >
                {translate("description")}
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/golbahcetesisleri/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    background: "rgba(228, 64, 95, 0.1)",
                    color: "#E4405F",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(228, 64, 95, 0.2)",
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 12px rgba(228, 64, 95, 0.3)",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                }}
              >
                {translate("quickLinks.title")}
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#4ECDC4",
                        textDecoration: "underline",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Working Hours */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccessTimeIcon fontSize="small" />
                {translate("workingHours.title")}
              </Typography>
              <Stack spacing={1}>
                {workingHours.map((schedule, index) => (
                  <Box key={index}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {schedule.day}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4ECDC4",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {schedule.time}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "1.1rem",
                }}
              >
                {translate("contact.title")}
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "#FF6B6B", mt: 0.5 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {translate("contact.address")}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon fontSize="small" sx={{ color: "#4ECDC4" }} />
                  <Link
                    href="tel:+905322173475"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#4ECDC4" },
                    }}
                  >
                    {translate("contact.phone")}
                  </Link>
                </Box>
                {/* E-mail opsiyonel */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 4, md: 5 },
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.85rem",
            }}
          >
            © {currentYear} {translate("copyright")}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="/privacy"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                fontSize: "0.85rem",
                "&:hover": { color: "#4ECDC4" },
              }}
            >
              {translate("privacyPolicy")}
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
