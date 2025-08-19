import {
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
  }>({
    open: false,
    success: null,
  });

  const handleClose = () => {
    setToast({ open: false, success: null });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_1ya2t1u",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setToast({ open: true, success: true });
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          setToast({ open: true, success: false });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"} p={5}>
        <Grid size={{ xs: 12, sm: 10, md: 6 }}>
          <Box mb={6}>
            <Typography component={"span"} variant="h1" fontWeight="bold">
              {translate("title")}
            </Typography>
            <Typography
              component={"span"}
              variant="h1"
              fontWeight="bold"
              color="primary"
            >
              !
            </Typography>
          </Box>

          <Stack direction={"row"} spacing={3}>
            <Box>
              <SocialButton
                href="https://t.me/+YMQmYIklnHIxMWE0"
                icon={<FaTelegramPlane />}
              />
              <SocialButton icon={<FaWhatsapp />} />
              <SocialButton icon={<FaInstagram />} />
              <SocialButton icon={<FaYoutube />} />
              <SocialButton icon={<FaXTwitter />} />
            </Box>
            <Box flexGrow={1}>
              <Stack
                component="form"
                spacing={3}
                noValidate
                ref={formRef}
                onSubmit={handleSend}
              >
                <TextField label="Adınız" name="user_name" variant="outlined" />
                <TextField
                  label="E-posta"
                  name="user_email"
                  variant="outlined"
                />
                <TextField
                  label="Mesajınız"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Stack direction={"row"} justifyContent={"flex-end"}>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    <Typography fontWeight={"bold"}>
                      {loading ? translate("sending") : translate("send")}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
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
    </>
  );
};
