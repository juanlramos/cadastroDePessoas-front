import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export const LoginForm = () => {
  return (
    <Box
      component={Paper}
      variant="elevation"
      padding={3}
      display="flex"
      flexDirection="column"
      sx={{
        maxWidth: 400,
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h5" align="center">
          Sign In
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};
