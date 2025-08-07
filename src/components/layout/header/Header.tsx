import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
  Container,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslate } from "../../../hooks/useTranslation";
import { ROUTES } from "../../../routes/Routes";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { translate, changeLocale } = useTranslate("layout.header");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (locale: string) => {
    changeLocale(locale);
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const menuItems = ROUTES.filter((r) => r.showInMenu).map((r) => ({
    label: translate(r.labelKey || ""),
    path: r.path,
  }));

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#00000088" }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <Stack direction={"row"} flexGrow={1}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              After
            </Typography>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Live
            </Typography>
          </Stack>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{
                      fontSize: { sm: "0.875rem", md: "1rem" },
                      fontWeight: "500",
                      px: { sm: 1, md: 2 },
                      color:
                        location.pathname === item.path
                          ? "#ff1744"
                          : (theme) => theme.palette.text.primary,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              {/* Desktop Language Selector */}
              <IconButton color="inherit" onClick={handleLangClick}>
                <TranslateIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleLanguageChange("tr")}>
                  Türkçe
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </MenuItem>
              </Menu>

              {/* Desktop Theme Toggle */}
              <IconButton onClick={colorMode.toggleMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
            </>
          )}
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleMobileMenuToggle}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box sx={{ pt: 2, pb: 1 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  selected={location.pathname === item.path} // stil için opsiyonel
                  sx={{
                    color:
                      location.pathname === item.path
                        ? "#ff1744"
                        : (theme) => theme.palette.text.primary,
                  }}
                >
                  <ListItemText
                    sx={{ fontWeight: "bold" }}
                    primary={item.label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Mobile Language Options */}
          <List>
            <ListItem>
              <ListItemText
                primary="Dil / Language"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleLanguageChange("tr")}>
                <ListItemText primary="Türkçe" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleLanguageChange("en")}>
                <ListItemText primary="English" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={colorMode.toggleMode}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {theme.palette.mode === "dark" ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                  <ListItemText
                    primary={
                      theme.palette.mode === "dark" ? "Açık Tema" : "Koyu Tema"
                    }
                  />
                </Stack>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
