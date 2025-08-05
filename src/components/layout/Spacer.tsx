import { Box } from "@mui/material";

type SpacerProps = {
  imageUrl: string;
};

export const Spacer = ({ imageUrl }: SpacerProps) => {
  return (
    <Box
      sx={{
        height: "50vh",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
