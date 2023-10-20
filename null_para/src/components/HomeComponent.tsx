import React from 'react';
import { AppBar, IconButton, Typography, Box, List, ListItem, ListItemText, LinearProgress, Toolbar, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@mui/icons-material';

export function Home() {
  return (
    <Box>

      <Grid container justifyContent="center" alignItems="center" direction="column" spacing={3}>
        <Grid item>
          <img src="/images/Schwein.png" alt="Piggy" style={{ width: 150, height: 150 }} />
        </Grid>
        <Grid item>
          <Typography variant="h4">Kontostand</Typography>
          <Typography variant="h2">95,69€</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h6">Letzten Zahlungen</Typography>
          <List>
            <ListItem>
              <ListItemText primary="-25,45€" secondary="Amazon co. UG Unt..." />
            </ListItem>
            {/* Add more ListItem components for more entries */}
          </List>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h6">Aufgaben</Typography>
          <List>
            <ListItem>
              <ListItemText primary="5€" secondary="Taylor Swift hören" />
            </ListItem>
            {/* Add more ListItem components for more entries */}
          </List>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h6">Sparziel</Typography>
          <Box marginBottom={1}>
            <Typography variant="body1">PS5</Typography>
            <LinearProgress variant="determinate" value={50} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}