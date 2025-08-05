import { Typography, Box, Container, Paper, Chip, Stack } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import OpacityIcon from "@mui/icons-material/Opacity";
import PaletteIcon from "@mui/icons-material/Palette";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../hooks/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// @ts-expect-error not found
import "swiper/css";
import { useMemo } from "react";

export const Products = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.products");

  const products = useMemo(
    () => [
      {
        id: 1,
        title: translate("items.ceramics.title"),
        description: translate("items.ceramics.description"),
        icon: <PaletteIcon />,
        color: "#1565C0",
        images: [
          "/images/products/cini/1.jpg",
          "/images/products/cini/2.jpg",
          "/images/products/cini/3.jpg",
          "/images/products/cini/4.jpg",
          "/images/products/cini/5.jpg",
          "/images/products/cini/6.jpg",
          "/images/products/cini/7.jpg",
          "/images/products/cini/8.jpg",
          "/images/products/cini/10.jpg",
        ],
        features: [
          translate("items.ceramics.features.0"),
          translate("items.ceramics.features.1"),
          translate("items.ceramics.features.2"),
        ],
      },
      {
        id: 2,
        title: translate("items.olives.title"),
        description: translate("items.olives.description"),
        icon: <SpaIcon />,
        color: "#2E7D32",
        images: [
          "/images/products/olive/1.webp",
          "/images/products/olive/2.jpg",
          "/images/products/olive/3.webp",
          "/images/products/olive/4.webp",
          "/images/products/olive/5.webp",
          "/images/products/olive/6.jpg",
        ],
        features: [
          translate("items.olives.features.0"),
          translate("items.olives.features.1"),
          translate("items.olives.features.2"),
        ],
      },
      {
        id: 3,
        title: translate("items.oil.title"),
        description: translate("items.oil.description"),
        icon: <OpacityIcon />,
        color: "#F57F17",
        images: [
          "/images/products/oil/1.webp",
          "/images/products/oil/2.jpg",
          "/images/products/oil/3.jpg",
          "/images/products/oil/4.webp",
        ],
        features: [
          translate("items.oil.features.0"),
          translate("items.oil.features.1"),
          translate("items.oil.features.2"),
        ],
      },
    ],
    [translate]
  );

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            {translate("title")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
            }}
          >
            {translate("subtitle")}
          </Typography>
        </Box>

        {products.map((product) => (
          <Paper
            key={product.id}
            sx={{
              mb: 6,
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              boxShadow: theme.shadows[1],
              "&:hover": {
                boxShadow: theme.shadows[4],
              },
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Title & Icon */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  bgcolor: product.color,
                  color: "#fff",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                {product.icon}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {product.title}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              {product.description}
            </Typography>

            {/* Images */}
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={3}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                }}
              >
                {product.images?.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Paper
                      component="img"
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      sx={{
                        height: "300px",
                        width: "100%",
                        borderRadius: 2,
                        objectFit: "contain",
                        boxShadow: (theme) => theme.shadows[2],
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* Features */}
            <Stack alignItems={"center"}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {translate("featuresLabel")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {product.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    color="primary"
                    sx={{ fontSize: "0.85rem" }}
                  />
                ))}
              </Box>
            </Stack>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};
