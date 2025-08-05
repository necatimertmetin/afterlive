import {
  Box,
  Typography,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import type { MenuCategory } from "../../../hooks/FirebaseMenuHooks";
import { MenuItemCard } from "./MenuItemCard";
import { useTranslate } from "../../../hooks/useTranslation";
import { ExpandMore, Restaurant as RestaurantIcon } from "@mui/icons-material";

export const MenuCategoryCard = ({
  category,
  index = 0,
}: {
  category: MenuCategory;
  index?: number;
}) => {
  const { translate } = useTranslate("pages.menu");

  return (
    <Fade in timeout={400 + index * 100}>
      <Accordion
        defaultExpanded={false}
        sx={{
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              sx={{
                fontSize: 28,
                color: "#2e7d32",
              }}
            />
          }
          sx={{
            p: 2,
            minHeight: "auto !important",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <RestaurantIcon
              sx={{
                mr: 2,
                color: "#2e7d32",
                fontSize: 28,
              }}
            />
            <Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "700",
                  textTransform: "capitalize",
                  fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  mb: 0.5,
                }}
              >
                {translate(category.key + ".title")}
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            p: 3,
            pt: 0,
          }}
        >
          {category.image && (
            <Box
              sx={{
                mb: 3,
                mt: 3,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.key}
                sx={{
                  width: "100%",
                  height: { xs: 180, sm: 220 },
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          )}

          {/* Empty State */}
          {category.items.length === 0 && (
            <Box
              sx={{
                textAlign: "center",
                py: 4,
                px: 2,
                bgcolor: "#fafafa",
                borderRadius: 2,
                border: "1px dashed #ddd",
                mt: category.image ? 0 : 3,
              }}
            >
              <RestaurantIcon
                sx={{
                  fontSize: 40,
                  color: "#bbb",
                  mb: 1,
                }}
              />
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontWeight: "500" }}
              >
                Bu kategoride henüz ürün bulunmamaktadır
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                Yakında yeni lezzetler eklenecek!
              </Typography>
            </Box>
          )}

          {/* Menu Items */}
          {category.items.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: category.image ? 0 : 3,
                gap: 2,
              }}
            >
              {category.items.map((item) => (
                <MenuItemCard
                  key={item.key}
                  categoryKey={category.key}
                  itemKey={item.key}
                  item={item}
                />
              ))}
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Fade>
  );
};
