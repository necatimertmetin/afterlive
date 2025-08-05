import { Typography, Link, Stack, Container, Card } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../../hooks/useTranslation";

export const Social = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.home.social");

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 6 },
        textAlign: "center",
      }}
    >
      <Card sx={{ py: { xs: 4, md: 6 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, md: 6 }}
          sx={{
            fontSize: 48,
            color: "text.secondary",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="https://www.instagram.com/golbahcetesisleri/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              p: 2,
              borderRadius: 3,
              background: "rgba(228, 64, 95, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                background: "rgba(228, 64, 95, 0.2)",
                boxShadow: "0 8px 25px rgba(228, 64, 95, 0.3)",
              },
            }}
          >
            <InstagramIcon
              fontSize="large"
              htmlColor="#E4405F"
              sx={{ fontSize: { xs: 40, md: 48 } }}
            />
          </Link>

          <StarIcon
            fontSize="large"
            sx={{
              color: "#FFD700",
              filter: "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))",
              fontSize: { xs: 32, md: 40 },
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              textAlign: "center",
              maxWidth: { xs: "100%", md: "auto" },
            }}
          >
            {translate("text.prefix")}{" "}
            <Link
              href="https://www.instagram.com/golbahcetesisleri/"
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{
                background: "linear-gradient(45deg, #E4405F, #F56040)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  textShadow: "0 2px 8px rgba(228, 64, 95, 0.3)",
                },
              }}
              aria-label="Instagram hashtag golbahce"
            >
              #golbahcetesisleri
            </Link>{" "}
            {translate("text.suffix")}
          </Typography>

          <StarIcon
            fontSize="large"
            sx={{
              color: "#FFD700",
              filter: "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))",
              fontSize: { xs: 32, md: 40 },
            }}
          />

          <Link
            href="https://www.instagram.com/golbahcetesisleri/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              p: 2,
              borderRadius: 3,
              background: "rgba(228, 64, 95, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                background: "rgba(228, 64, 95, 0.2)",
                boxShadow: "0 8px 25px rgba(228, 64, 95, 0.3)",
              },
            }}
          >
            <InstagramIcon
              fontSize="large"
              htmlColor="#E4405F"
              sx={{ fontSize: { xs: 40, md: 48 } }}
            />
          </Link>
        </Stack>
      </Card>
    </Container>
  );
};
