import {
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { SocialButton } from "./components/SocialButton";
import { useTranslate } from "../../hooks/useTranslation";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contant.css";

export const Contact = () => {
  const { translate } = useTranslate("pages.contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    success: boolean | null;
  }>({ open: false, success: null });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => {
    setToast({ open: false, success: null });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.message.trim() !== "";

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_kxpiy0a",
        "template_lv17xvo", // Buraya kendi template ID'nizi yazın
        formRef.current,
        "vwO_q49ta-lwXKM7S" // Public Key
      )
      .then(
        () => {
          setToast({ open: true, success: true });
          setLoading(false);
          formRef.current?.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setToast({ open: true, success: false });
          setLoading(false);
        }
      );
  };

  return (
    <Container>
      <Grid container display="flex" justifyContent="center" p={5}>
        <Grid sx={{ xs: 12, sm: 10, md: 6 }}>
          <Box mb={6}>
            <Typography component="span" variant="h3" fontWeight="bold">
              {translate("title")}
            </Typography>
            <Typography
              component="span"
              variant="h3"
              fontWeight="bold"
              color="primary"
            >
              !
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 1 }}>
              <Stack
                direction={{ xs: "row", md: "column" }} // xs = mobil → yatay, md ve üstü → dikey
                alignItems="center"
              >
                <SocialButton
                  href="https://t.me/+YMQmYIklnHIxMWE0"
                  icon={<FaTelegramPlane />}
                />
                <SocialButton
                  href="https://chat.whatsapp.com/ENSSjXJTtWaG4BKN7w2KIH"
                  icon={<FaWhatsapp />}
                />
                <SocialButton
                  href="https://www.instagram.com/afterlive.tr?igsh=Y3oxZnl4MGRmYmho"
                  icon={<FaInstagram />}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 11 }}>
              <Stack
                component="form"
                spacing={3}
                noValidate
                ref={formRef}
                onSubmit={handleSend}
              >
                <TextField
                  label="Adınız"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="E-posta"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Mesajınız"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Stack direction="row" justifyContent="flex-end">
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading || !isFormValid} // Gerekli alanlar dolmadıkça disabled
                  >
                    <Typography fontWeight="bold">
                      {loading ? translate("sending") : translate("send")}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={toast.success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.success ? translate("success") : translate("error")}
        </Alert>
      </Snackbar>
    </Container>
  );
};
