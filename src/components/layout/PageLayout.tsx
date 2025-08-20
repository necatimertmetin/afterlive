// PageLayout.tsx (Basitleştirilmiş)
import { Box, Stack } from "@mui/material";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SocialButton } from "../../pages/contact/components/SocialButton";

export const PageLayout: React.FC = () => {
  return (
    <Box>
      <Stack
        direction="column" // xs = mobil → yatay, md ve üstü → dikey
        alignItems="center"
        sx={{
          position: "fixed",
          top: "50%",
          right: 0,
          zIndex: 1000,
          transform: "translateY(-50%)",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          overflow: "hidden",
        }}
      >
        <SocialButton
          href="https://t.me/+YMQmYIklnHIxMWE0"
          icon={<FaTelegramPlane />}
          bgColor="#27A3E2"
        />
        <SocialButton
          href="https://chat.whatsapp.com/ENSSjXJTtWaG4BKN7w2KIH"
          icon={<FaWhatsapp />}
          bgColor="#45C256"
        />
        <SocialButton
          href="https://www.instagram.com/afterlive.tr?igsh=Y3oxZnl4MGRmYmho"
          icon={<FaInstagram />}
          bgColor="#E711AD"
        />
      </Stack>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
