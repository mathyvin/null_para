import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './ThemeProvider';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeChildrenPage from './pages/HomeChildrenPage';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NullParaAppBar } from './components/NullParaAppBar';
import { routesChildren } from './routes';
import { IRoutes } from './interfaces/IRoutes';


const routes : IRoutes[] = routesChildren;

const Sparen = () => <div>Sparen Page</div>;
const Lernen = () => <div>Lernen Page</div>;
const Einstellungen = () => <div>Einstellungen Page</div>;


export function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <NullParaAppBar routes={routes}/>
      <Routes>
        {routes.map(route => 
        <Route path={route.url} Component={route.component}/>
        )
        }
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
};