import { Grid, Typography, Stack, TextField, Button, Box } from "@mui/material";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialButton } from "./components/SocialButton";
export const Contact = () => {
  return (
    <Grid container display={"flex"} justifyContent={"center"} p={5}>
      <Grid size={{ xs: 12, sm: 10, md: 6 }}>
        <Box mb={6}>
          <Typography component={"span"} variant="h1" fontWeight="bold">
            Hello
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
            <SocialButton icon={<FaInstagram />} />
            <SocialButton icon={<FaYoutube />} />
            <SocialButton icon={<FaXTwitter />} />
            <SocialButton icon={<FaFacebookF />} />
            <SocialButton icon={<FaLinkedinIn />} />
          </Box>
          <Box flexGrow={1}>
            <Stack component="form" spacing={3} noValidate>
              <TextField label="Adınız" variant="outlined" />
              <TextField label="E-posta" variant="outlined" />
              <TextField
                label="Mesajınız"
                variant="outlined"
                multiline
                rows={4}
              />
              <Stack direction={"row"} justifyContent={"flex-end"}>
                <Button type="submit" variant="contained" color="primary">
                  <Typography fontWeight={"bold"}>Gönder</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
