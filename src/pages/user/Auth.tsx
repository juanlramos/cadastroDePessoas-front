import { Box, Button } from "@mui/material";
import { useState } from "react";

import { LoginForm, RegisterForm } from "./components";

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {isRegister ? (
        <>
          <RegisterForm />
          <p>
            Já tem uma conta?
            <Button
              onClick={() => {
                setIsRegister(!isRegister);
              }}
            >
              Entrar
            </Button>
          </p>
        </>
      ) : (
        <>
          <LoginForm />
          <p>
            Ainda não tem uma conta?
            <Button
              onClick={() => {
                setIsRegister(!isRegister);
              }}
            >
              Cadastrar
            </Button>
          </p>
        </>
      )}
    </Box>
  );
};
