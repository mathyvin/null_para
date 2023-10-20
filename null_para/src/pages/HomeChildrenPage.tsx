import React from 'react';
import { AppBar, IconButton, Typography, Box, List, ListItem, ListItemText, LinearProgress, Toolbar, Grid } from '@mui/material';
import SavingTileProgressBar from '../components/SavingTile';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@mui/icons-material';
import BankingTile from '../components/BankingTile';
import { StyledTypographyBig } from '../components/StyledComponents';
export default function HomeChildrenPage() {
    return (
      <Box>
        <Grid container justifyContent="center" alignItems="center" width='100vw' direction={'column'} spacing={3}>
          <Grid item>
            <img src="/images/Schwein.png" alt="Piggy" style={{ width: 150, height: 150 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">Kontostand</Typography>
            <Typography variant="h2">95,69€</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <StyledTypographyBig>Letzten Zahlungen</StyledTypographyBig>
            <Grid container spacing={3}>
              <Grid item>
                <BankingTile />
              </Grid>
              <Grid item>
                <BankingTile />
              </Grid>
              <Grid item>
                <BankingTile />
              </Grid>
            </Grid>
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
            <SavingTileProgressBar currentAmount={499} goalAmount={500} />
          </Grid>
        </Grid>
      </Box>
    );

  
}