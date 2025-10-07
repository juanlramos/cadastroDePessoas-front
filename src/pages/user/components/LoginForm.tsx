import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { ILoginData } from "../../../types/auth";
import { loginSchema } from "../../../schemas/auth";

export const LoginForm = () => {
  //aqui conecta o react-hook-form ao schema de validação que criamos
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });

  const handleLogin = (data: ILoginData) => {
    console.log("dados validados do zod:", data);
    //aqui em baixo devo chamar o service para logar
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLogin)}
      sx={{
        maxWidth: { xs: 250, sm: 400 },
        width: "100%",
      }}
    >
      <Box component={Paper} variant="outlined" padding={3}>
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            Sign In
          </Typography>

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email} //aqui garante que o resutlado é um booleano
            helperText={errors.email?.message} //aqui é um helpertext do MUI que vai exibir a mensagem de validação que criamos para o zod
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
