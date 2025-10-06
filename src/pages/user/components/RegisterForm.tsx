import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const RegisterForm = () => {
  return (
    <Box
      component={Paper}
      variant="outlined"
      padding={3}
      sx={{
        maxWidth: { xs: 250, sm: 400 },
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Register
        </Typography>

        <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Grid size={{ sm: 6 }}>
            <TextField variant="outlined" label="Name" fullWidth></TextField>
          </Grid>

          <Grid size={{ sm: 6 }}>
            <TextField variant="outlined" type="date" fullWidth></TextField>
          </Grid>
        </Grid>

        <TextField variant="outlined" label="E-mail" type="email"></TextField>
        <TextField
          variant="outlined"
          label="Password"
          type="password"
        ></TextField>

        <Button variant="contained">Register</Button>
      </Stack>
    </Box>
  );
};
