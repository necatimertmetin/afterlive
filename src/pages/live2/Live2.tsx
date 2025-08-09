import { Box } from "@mui/material";
import { useState } from "react";
import { Stories } from "../live/components/carousel/Stories";
import { mockData } from "../live/components/data";

type Props = {};

export const Live2 = (props: Props) => {
  const [selectedId, setSelectedId] = useState(0);

  // Sadece selectedId değiştiğinde yeniden hesaplanır
  return (
    <Box>
      <Box mb={4}>
        <Stories
          stories={mockData}
          onSelect={(id: number) => setSelectedId(id)}
        />
      </Box>
    </Box>
  );
};
