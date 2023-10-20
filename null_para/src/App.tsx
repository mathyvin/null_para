import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './ThemeProvider';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/HomeComponent';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NullParaAppBar } from './components/NullParaAppBar';

const Sparen = () => <div>Sparen Page</div>;
const Lernen = () => <div>Lernen Page</div>;
const Einstellungen = () => <div>Einstellungen Page</div>;

export function App() {
  const [currentRoute, setCurrentRoute] = useState(null);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <NullParaAppBar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sparen" Component={Sparen} />
        <Route path="/lernen" Component={Lernen} />
        <Route path="/einstellungen" Component={Einstellungen} />
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
};