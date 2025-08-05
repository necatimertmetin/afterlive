import {
  Box,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Alert,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useTranslate } from "../../hooks/useTranslation";
import { useMenuData } from "../../hooks/FirebaseMenuHooks";

export const MenuPage = () => {
  const { translate } = useTranslate("pages.menu");
  const { menuData, loading, error } = useMenuData();
  const theme = useTheme();

  // Loading state
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box p={{ xs: 2, md: 3 }} mx={{ xs: 1, sm: 2, md: 30 }}>
        <Alert severity="error">
          Menü verisi yüklenirken hata oluştu: {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={{ xs: 2, sm: 2.5, md: 3 }} mx={{ xs: 1, sm: 2, md: 30 }}>
      <Typography
        variant="h2"
        gutterBottom
        textAlign="center"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        {translate("title")}
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
        {menuData.map((category) => (
          <Grid
            key={category.key}
            size={{ xs: 12, sm: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            sx={{
              backgroundImage:
                theme.palette.mode === "dark"
                  ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${category.image}')`
                  : `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('${category.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              borderRadius: 2,
              minHeight: { xs: "200px", sm: "250px", md: "300px" },
            }}
            p={{ xs: "32px", sm: "48px", md: "64px" }}
            textAlign={"center"}
          >
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textTransform={"uppercase"}
              sx={{
                backdropFilter: "blur(3px)",
                py: 1,
                px: 3,
                borderRadius: 1,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              }}
            >
              {translate(`${category.key}.title`)}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={"bold"}
              sx={{
                backdropFilter: "blur(3px)",
                py: 1,
                px: 3,
                borderRadius: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                lineHeight: 1.5,
              }}
            >
              {translate(`${category.key}.description`)}
            </Typography>
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              component={Link}
              to={`/menu/${category.key}`}
              size={"small"}
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
              }}
            >
              {translate("contents")}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuPage;
