import {
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslate } from "../../../../hooks/useTranslation";

import { ExtraItemCard } from "./ExtraItemCard";
import { AllergenIcons } from "./AllergenIcons";
import type { AllergenKey } from "../../../../types/Allergens";
import { useState } from "react";

type Extra = {
  key: string;
  image: string;
  allergens?: AllergenKey[];
};

type Item = {
  key: string;
  extras?: Extra[];
  image: string;
  allergens?: AllergenKey[];
};

type Props = {
  categoryKey: string;
  item: Item;
};

export const CategoryItemCard = ({ categoryKey, item }: Props) => {
  const { translate } = useTranslate("pages.menu");
  const hasExtras = item.extras && item.extras.length > 0;
  console.log(item);
  // Fallback resim yolu
  const fallbackSrc = "https://picsum.photos/500/300";

  // İlk resim kaynağı
  const initialSrc = `/images/menu/${categoryKey}/${item.key}.webp`;
  // State ile src kontrolü (büyük resim için)
  const [mainSrc, setMainSrc] = useState(initialSrc);
  return (
    <Grid
      size={{
        xs: hasExtras ? 12 : 12,
        sm: hasExtras ? 12 : 6,
        md: hasExtras ? 12 : 4,
      }}
    >
      <CardContent sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
        <Stack alignItems="center" spacing={{ xs: 1, sm: 2 }}>
          {hasExtras ? (
            <>
              <Paper
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 5,
                  width: "100%",
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 2, sm: 3, md: 5 }}
                  alignItems="center"
                >
                  <img
                    style={{
                      height: 200,
                      width: "100%",
                      maxWidth: 400,
                      borderRadius: 12,
                      objectFit: "cover",
                      flex: 1,
                    }}
                    src={item.image}
                    alt={translate(`${categoryKey}.items.${item.key}.title`)}
                    onError={() => {
                      if (mainSrc !== fallbackSrc) setMainSrc(fallbackSrc);
                    }}
                  />

                  <Stack
                    flex={1}
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 1, sm: 2 }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      }}
                    >
                      {translate(`${categoryKey}.items.${item.key}.title`)}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      {translate(
                        `${categoryKey}.items.${item.key}.description`
                      )}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Typography
                variant="h4"
                textAlign="center"
                py={{ xs: 2, sm: 3, md: 5 }}
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                {translate("extras")}
              </Typography>

              <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                {item.extras!.map((extra) => (
                  <ExtraItemCard
                    key={extra.key}
                    categoryKey={categoryKey}
                    itemKey={item.key}
                    extra={extra}
                  />
                ))}
              </Grid>
            </>
          ) : (
            <Card
              sx={{
                p: { xs: 1.5, sm: 2 },
                borderRadius: 5,
                minHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: "100%",
              }}
            >
              <img
                style={{
                  height: 200,
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "cover",
                }}
                src={item.image ?? mainSrc}
                alt={translate(`${categoryKey}.items.${item.key}.title`)}
                onError={() => {
                  if (mainSrc !== fallbackSrc) setMainSrc(fallbackSrc);
                }}
              />
              <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                <Stack
                  alignItems="center"
                  spacing={{ xs: 1, sm: 2 }}
                  textAlign={"center"}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    {translate(`${categoryKey}.items.${item.key}.title`)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    {translate(`${categoryKey}.items.${item.key}.description`)}
                  </Typography>
                </Stack>
              </CardContent>
              <AllergenIcons allergens={item.allergens} />
            </Card>
          )}
        </Stack>
      </CardContent>
    </Grid>
  );
};
