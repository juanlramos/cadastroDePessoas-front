import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { IRegisterData } from "../../../types/auth";
import { registerSchema } from "../../../schemas/auth";

export const RegisterForm = () => {
  //aqui conecta o react-hook-form ao schema de validação que criamos
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterData>({ resolver: zodResolver(registerSchema) });

  const handleRegister = (data: IRegisterData) => {
    console.log("dados validados do zod:", data);
    //aqui em baixo devo chamar o service para logar
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleRegister)}
      sx={{
        maxWidth: { xs: 250, sm: 400 },
        width: "100%",
      }}
    >
      <Box component={Paper} variant="outlined" padding={3}>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Register
          </Typography>

          <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
            <Grid size={{ sm: 6 }}>
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                {...register("name")}
                error={!!errors.name} //aqui garante que o resutlado é um booleano
                helperText={errors.name?.message} //aqui é um helpertext do MUI que vai exibir a mensagem de validação que criamos para o zod
              ></TextField>
            </Grid>

            <Grid size={{ sm: 6 }}>
              <TextField
                variant="outlined"
                type="date"
                fullWidth
                {...register("birth")}
                error={!!errors.birth} //aqui garante que o resutlado é um booleano
                helperText={errors.birth?.message} //aqui é um helpertext do MUI que vai exibir a mensagem de validação que criamos para o zod
              ></TextField>
            </Grid>
          </Grid>

          <TextField
            variant="outlined"
            label="E-mail"
            type="email"
            {...register("email")}
            error={!!errors.email} //aqui garante que o resutlado é um booleano
            helperText={errors.email?.message} //aqui é um helpertext do MUI que vai exibir a mensagem de validação que criamos para o zod
          ></TextField>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password} //aqui garante que o resutlado é um booleano
            helperText={errors.password?.message} //aqui é um helpertext do MUI que vai exibir a mensagem de validação que criamos para o zod
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
