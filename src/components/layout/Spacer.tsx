import { Stack, Typography } from "@mui/material";
import { useTranslate } from "../../hooks/useTranslation";

type SpacerProps = {
  imageUrl: string;
};

export const Spacer = ({ imageUrl }: SpacerProps) => {
  const { translate } = useTranslate("pages.home.ourStory");

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: "50vh",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Slogan */}
      <Typography
        variant="h4"
        color="error"
        sx={{
          fontWeight: 500,
          fontStyle: "italic",
          border: "2px solid",
          borderColor: (theme) => theme.palette.primary.main,
          padding: "50px 100px",
          background: "#000000aa",
          boxShadow: "0px 0px 15px 10px #000",
        }}
      >
        {translate("slogan")}
      </Typography>
    </Stack>
  );
};
