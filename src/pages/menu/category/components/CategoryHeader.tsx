import { Grid, Typography } from "@mui/material";
import { useTranslate } from "../../../../hooks/useTranslation";
import type { MenuCategory } from "../../../../hooks/FirebaseMenuHooks";

type Props = {
  category: MenuCategory;
};

export const CategoryHeader = ({ category }: Props) => {
  const { translate } = useTranslate("pages.menu");
  return (
    <Grid
      size={{ xs: 12 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">{translate("title")}</Typography>
      <Typography variant="h3" fontWeight="bold">
        {translate(`${category.key}.title`)}
      </Typography>
    </Grid>
  );
};
