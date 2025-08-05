import { Stack, Typography } from "@mui/material";
import { ALLERGENS, type AllergenKey } from "../../../../types/Allergens";
import { useTranslate } from "../../../../hooks/useTranslation";

type Props = {
  allergens?: AllergenKey[];
};

export const AllergenIcons = ({ allergens = [] }: Props) => {
  const { translate } = useTranslate();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      spacing={4}
      width={"100%"}
    >
      {allergens.map((key) => {
        const allergen = ALLERGENS[key];
        if (!allergen) return null;
        return (
          <Stack alignItems="center" textAlign="center">
            {allergen.icon}
            <Typography variant="caption">
              {translate(allergen.title)}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
