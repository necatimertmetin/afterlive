import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import { useTranslate } from "../../hooks/useTranslation";

export const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();
  const { translate } = useTranslate("pages.privacy");

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 3,
          textAlign: "center",
          background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {translate("title")}
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        {translate("intro")}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Stack spacing={4}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section1.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section1.content")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section2.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section2.content")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section3.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section3.content")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section4.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section4.content")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section5.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section5.content")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {translate("section6.title")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {translate("section6.content")}
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="body2"
        sx={{ color: "text.secondary", textAlign: "center" }}
      >
        © {currentYear} {translate("footer")}
      </Typography>
    </Container>
  );
};
