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
          background: "rgba(0,0,0,0.6)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          background: "rgba(0,0,0,0.6)",
          border: "2px solid #ff0000",
          borderRadius: "20px",
          padding: "40px 80px",
          textAlign: "center",
          boxShadow: "0 0 30px rgba(255,0,0,0.5)",
          backdropFilter: "blur(6px)",
          animation: "fadeInUp 1s ease-out",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(40px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            color: "#ff0000",
            letterSpacing: "2px",
            mb: 2,
          }}
        >
          {translate("slogan")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#ff0000",
            opacity: 0.8,
            fontWeight: 500,
          }}
        >
          {translate("subtitle")}
        </Typography>
      </Box>
    </Stack>
  );
};
