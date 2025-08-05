import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useTranslate } from "../../../../hooks/useTranslation";
import { AllergenIcons } from "./AllergenIcons";
import type { AllergenKey } from "../../../../types/Allergens";
import { useState } from "react";

type Extra = {
  key: string;
  image: string;
  allergens?: AllergenKey[];
};

type Props = {
  categoryKey: string;
  itemKey: string;
  extra: Extra;
};

export const ExtraItemCard = ({ categoryKey, itemKey, extra }: Props) => {
  const { translate } = useTranslate("pages.menu");

  const fallbackSrc = "https://picsum.photos/500/300";

  // İlk resim kaynağı
  const initialSrc = `/images/menu/${categoryKey}/${itemKey}/extras/${extra.key}.webp`;

  // State ile src kontrolü (büyük resim için)
  const [mainSrc, setMainSrc] = useState(initialSrc);
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ p: 2, borderRadius: 5, minHeight: "400px" }}>
        <img
          style={{
            height: 200,
            borderRadius: 12,
            objectFit: "cover",
            width: "100%",
          }}
          src={extra.image ?? mainSrc}
          alt={translate(
            `${categoryKey}.items.${itemKey}.extras.${extra.key}.title`
          )}
          onError={() => {
            if (mainSrc !== fallbackSrc) setMainSrc(fallbackSrc);
          }}
        />

        <CardContent>
          <Stack alignItems="center" spacing={2} textAlign={"center"}>
            <Typography variant="h6" fontWeight={600}>
              {translate(
                `${categoryKey}.items.${itemKey}.extras.${extra.key}.title`
              )}
            </Typography>
            <Typography>
              {translate(
                `${categoryKey}.items.${itemKey}.extras.${extra.key}.description`
              )}
            </Typography>

            <AllergenIcons allergens={extra.allergens} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
