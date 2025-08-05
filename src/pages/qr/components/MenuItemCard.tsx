import {
  Paper,
  Box,
  Typography,
  Collapse,
  Chip,
  Fade,
  Button,
} from "@mui/material";
import React from "react";
import type { MenuItem } from "../../../hooks/FirebaseMenuHooks";
import { ExpandLess, ExpandMore, LocalOffer } from "@mui/icons-material";
import { AllergenIcons } from "../../menu/category/components/AllergenIcons";
import { useTranslate } from "../../../hooks/useTranslation";

export const MenuItemCard = ({
  categoryKey,
  itemKey,
  item,
}: {
  categoryKey: string;
  itemKey: string;
  item: MenuItem;
}) => {
  const [openExtras, setOpenExtras] = React.useState(false);
  const { translate } = useTranslate("pages.menu");

  return (
    <Fade in timeout={300}>
      <Paper
        variant="outlined"
        sx={{
          p: 2.5,
          mb: 2,
          borderRadius: 3,
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: item.extras ? 1.5 : 0,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  mb: 1,
                  fontSize: "1.1rem",
                  lineHeight: 1.3,
                }}
              >
                {translate(`${categoryKey}.items.${itemKey}.title`)}
              </Typography>
              <Chip
                icon={<LocalOffer sx={{ fontSize: "16px !important" }} />}
                label={`${item.price.toFixed(2)}₺`}
                size="small"
                sx={{
                  bgcolor: "#e8f5e8",
                  color: "#2e7d32",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  "& .MuiChip-icon": {
                    color: "#2e7d32",
                  },
                }}
              />
            </Box>

            <AllergenIcons allergens={item.allergens} />
          </Box>
        </Box>
        {item.extras && (
          <Button
            variant="outlined"
            onClick={() => setOpenExtras(!openExtras)}
            fullWidth
            endIcon={openExtras ? <ExpandLess /> : <ExpandMore />}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "capitalize",
              }}
            >
              <LocalOffer sx={{ fontSize: "18px" }} />
              {translate("extras")}
            </Typography>
          </Button>
        )}

        {item.extras && (
          <Collapse in={openExtras} timeout={300}>
            <Box
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {item.extras.map((extra) => (
                  <Paper
                    key={extra.key}
                    variant="outlined"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {translate(
                          `${categoryKey}.items.${itemKey}.extras.${extra.key}.title`
                        )}
                      </Typography>

                      <Chip
                        label={`+${extra.price.toFixed(2)}₺`}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          color: "#2e7d32",
                          borderColor: "#2e7d32",
                        }}
                      />
                    </Box>

                    <AllergenIcons allergens={extra.allergens} />
                  </Paper>
                ))}
              </Box>
            </Box>
          </Collapse>
        )}
      </Paper>
    </Fade>
  );
};
