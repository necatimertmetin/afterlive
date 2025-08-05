import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../../hooks/useTranslation";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const WhatWeHave = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.home.whatWeHave");
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      {
        title: translate("items.gozleme"),
        image:
          "https://delishglobe.com/wp-content/uploads/2024/11/Turkish-Gozleme-Stuffed-Flatbread.png",
        color: "#FF6B6B",
        link: "/menu/gozleme",
      },
      {
        title: translate("items.kahvalti"),
        image:
          "https://i1.wp.com/artofwayfaring.com/app/uploads/2019/02/Serpme-Kahvalt%C4%B1-3.jpg?ssl=1",
        color: "#4ECDC4",
        link: "/menu/breakfast",
      },
      {
        title: translate("items.izgara"),
        image:
          "https://miras-food-2019.imgix.net/media/Recepten/Miras-juni-klein-36.jpg?auto=format&crop=focalpoint&domain=miras-food-2019.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=82&w=768",
        color: "#45B7D1",
        link: "/menu/grill",
      },
    ],
    [translate]
  );

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        size={{ xs: 12, md: 8, lg: 6 }}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {translate("title")}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            lineHeight: 1.6,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            fontWeight: 400,
            maxWidth: 800,
          }}
        >
          {translate("subtitle")}
        </Typography>
      </Grid>

      <Grid container spacing={{ xs: 3, md: 5 }} sx={{ px: { xs: 2, md: 10 } }}>
        {menuItems.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Card
              sx={{
                width: "100%",
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.3)"
                }`,
                transition: "all 0.3s ease",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px ${item.color}30`,
                  "& .menu-image": {
                    transform: "scale(1.1)",
                  },
                  "& .menu-button": {
                    transform: "scale(1.05)",
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                  },
                },
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  aspectRatio: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  className="menu-image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  className="menu-button"
                  sx={{
                    background: `linear-gradient(135deg, ${item.color}dd, ${item.color})`,
                    color: "white",
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    boxShadow: `0 4px 15px ${item.color}40`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                    },
                  }}
                  onClick={() => navigate(item.link)}
                >
                  {item.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
