import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/ThemeProvider";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NullParaAppBar } from "./components/NullParaAppBar";
import { routesChildren, routesParent } from "./routes";
import { IRoutes } from "./interfaces/IRoutes";

//TODO user login instead of this
const routes: IRoutes[] = window.location.href.endsWith("eltern")
  ? routesParent
  : routesChildren;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NullParaAppBar routes={routes} />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.url}
              Component={route.component}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
