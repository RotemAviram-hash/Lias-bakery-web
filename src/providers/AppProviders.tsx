import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { ProjectThemeProvider } from "./ProjectThemeProvider";
import { SnackProvider } from "./SnackProvider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ProjectThemeProvider>
        <CssBaseline />
        <SnackProvider>{children}</SnackProvider>
      </ProjectThemeProvider>
    </BrowserRouter>
  );
};
