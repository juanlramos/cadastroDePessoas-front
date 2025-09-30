import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Error, Home } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
