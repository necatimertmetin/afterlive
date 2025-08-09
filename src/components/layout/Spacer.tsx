import { Stack, Typography, Box } from "@mui/material";
import { useTranslate } from "../../hooks/useTranslation";

type SpacerProps = {
  imageUrl: string;
};

export const Spacer = ({ imageUrl }: SpacerProps) => {
  const { translate } = useTranslate("pages.home.ourStory");

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
          position: "relative",
          zIndex: 2,
          px: { xs: 4, md: 10 },
          py: { xs: 5, md: 8 },
          borderRadius: "16px",
          border: "2px solid #ff0000",
          boxShadow: "0 0 15px #ff0000",
          backdropFilter: "none",
          background: "transparent",
          textAlign: "center",
          cursor: "default",
          transition: "box-shadow 0.4s ease",
          "&:hover": {
            boxShadow:
              "0 0 25px 4px rgba(255,0,0,0.8), 0 0 40px 6px rgba(255,0,0,0.6)",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "4px",
            mb: 3,
            textTransform: "uppercase",
            userSelect: "none",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {translate("slogan")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#ff0000",
            fontWeight: 500,
            fontStyle: "normal",
            userSelect: "none",
            letterSpacing: 1,
          }}
        >
          {translate("subtitle")}
        </Typography>

        <Box
          sx={{
            mt: 6,
            mx: "auto",
            height: 3,
            width: 80,
            borderRadius: 2,
            background:
              "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,0.6) 50%, rgba(255,0,0,1) 100%)",
            boxShadow: "0 0 12px 4px rgba(255,0,0,0.7)",
            animation: "neonPulse 2.5s ease-in-out infinite",
            "@keyframes neonPulse": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.6 },
            },
          }}
        />
      </Box>
    </Stack>
  );
};
