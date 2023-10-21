import React from 'react';
import { Typography, Grid } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function LearnPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={3}>
        <Grid item sx={{ marginTop: '8px' }}>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/poke_nature.jpg"
        title="green"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Green Pokémon World
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Let Shiggy and friends explain your digital footprint and how to keep the Pokémon world green.
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{ color: '#002E3C', backgroundColor: '#FFD700' }}><PlayArrowIcon/></Button>
      <Typography sx={{ fontWeight: 'bold', marginLeft: '8px' }} variant="body2" color="text.secondary">
              Finish to get a 2€ Reward
            </Typography>
      </CardActions>
    </Card>
    </Grid>
    <Grid item>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/poke_mistakes.webp"
        title="avoid mistakes with ash"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Smart Money Management with Ash
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ash shows you how to avoid mistakes when saving money and how to avoid unnecessary expenses.
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{ color: '#002E3C', backgroundColor: '#FFD700' }}><PlayArrowIcon/></Button>
      <Typography sx={{ fontWeight: 'bold', marginLeft: '8px' }} variant="body2" color="text.secondary">
              Finish to get a 2€ Reward
            </Typography>
      </CardActions>
    </Card>
    </Grid>

    <Grid item sx={{ marginBottom: '8px' }}>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/poke_saving.jpg"
        title="saving tips from mauzi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mauzi's Pro Savings Tips
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get the best money-saving tips from Mauzi to get closer to your savings goals.
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{ color: '#002E3C', backgroundColor: '#FFD700' }}><PlayArrowIcon/></Button>
      <Typography sx={{ fontWeight: 'bold', marginLeft: '8px' }} variant="body2" color="text.secondary">
              Finish to get a 2€ Reward
            </Typography>
      </CardActions>
    </Card>
    </Grid>
      </Grid>
  );
}