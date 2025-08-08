import { Grid, Typography, Stack, TextField, Button, Box } from "@mui/material";

export const Contact = () => {
  return (
    <Grid container display={"flex"} justifyContent={"center"} p={5}>
      <Grid size={{ xs: 12, sm: 10, md: 8 }}>
        <Typography variant="h1" fontWeight="bold" mb={6}>
          Hello!
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ border: "1px solid red" }}>
            <Box>
              <Typography variant="h6">EMail</Typography>
              <Typography variant="h5">necatimertmetin@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack component="form" spacing={3} noValidate>
              <TextField label="Adınız" variant="outlined" />
              <TextField label="E-posta" variant="outlined" />
              <TextField
                label="Mesajınız"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff0000",
                  "&:hover": { bgcolor: "#cc0000" },
                  fontWeight: "bold",
                  mt: 2,
                  alignSelf: "flex-start",
                  px: 4,
                }}
              >
                Gönder
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
