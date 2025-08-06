import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../hooks/useTranslation";

export const Contact = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.contact");

  const contactItems = [
    {
      icon: <EmailIcon />,
      title: translate("email.title"),
      content: "support@yourapp.com",
      link: "mailto:support@yourapp.com",
      color: "#FF6B6B",
    },
  ];

  const socialMedia = [
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      href: "https://facebook.com/yourapp",
      color: "#3b5998",
    },
    {
      icon: <TwitterIcon />,
      label: "Twitter",
      href: "https://twitter.com/yourapp",
      color: "#1da1f2",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://instagram.com/yourapp",
      color: "#e1306c",
    },
  ];

  return (
    <Box sx={{ py: 6, px: 4, minHeight: { md: "calc(100vh - 64px)" } }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, fontSize: { xs: 24, md: 48 }, mb: 2 }}
        >
          {translate("title")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: 600, mx: "auto", fontSize: { xs: 14, md: 18 } }}
        >
          {translate("subtitle")}
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={10}>
        <Grid size={{ xs: 6 }}>
          {contactItems.map(({ icon, title, content, link, color }) => (
            <Card sx={{ mb: 3 }}>
              <CardContent
                sx={{ display: "flex", gap: 2, alignItems: "center", p: 3 }}
              >
                <Avatar
                  sx={{
                    bgcolor: color,
                    width: 56,
                    height: 56,
                    boxShadow: `0 4px 15px ${color}30`,
                  }}
                >
                  {icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {title}
                  </Typography>
                  <Link
                    href={link}
                    underline="hover"
                    sx={{ wordBreak: "break-all", fontSize: 16 }}
                  >
                    {content}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, fontSize: { xs: 16, md: 20 } }}
              >
                {translate("followUs")}
              </Typography>
              <Stack direction="row" spacing={3} justifyContent="center">
                {socialMedia.map(({ icon, label, href, color }, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      color,
                      fontSize: 28,
                      "&:hover": { color: theme.palette.primary.main },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
