import {
  Box,
  CircularProgress,
  Alert,
  Typography,
  Container,
} from "@mui/material";
import { useMenuData } from "../../hooks/FirebaseMenuHooks";
import { MenuCategoryCard } from "./components/MenuCategoryCard";

export const QRMenuPage = () => {
  const { menuData, loading, error } = useMenuData();

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          bgcolor: "#f8f9fa",
        }}
      >
        <CircularProgress
          size={50}
          sx={{
            mb: 2,
            color: "#2e7d32",
          }}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          Menü yükleniyor...
        </Typography>
      </Box>
    );

  if (error)
    return (
      <Container maxWidth="sm">
        <Alert
          severity="error"
          sx={{
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="body1" fontWeight="500">
            Menü yüklenirken bir hata oluştu
          </Typography>
        </Alert>
      </Container>
    );

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, my: 3 }}>
        {menuData.map((category, index) => (
          <MenuCategoryCard
            key={category.key}
            category={category}
            index={index}
          />
        ))}
      </Box>
    </Container>
  );
};
