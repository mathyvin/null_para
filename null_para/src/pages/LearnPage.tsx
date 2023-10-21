import React from 'react';
import { AppBar, IconButton, Typography, Box, List, ListItem, ListItemText, LinearProgress, Toolbar, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@mui/icons-material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function LearnPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={3}>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://qumin.co.uk/wp-content/uploads/2018/07/s3-news-tmp-77017-peppa_pig-default-1024.jpg"
        title="pepper pig para"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Peppa "Pablo" Pig
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Spend money like pablo escobar. Alcohol, snow and big cars - Peppa "Pablo" Pig shows how it works.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>


    <Grid item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://wegotthiscovered.com/wp-content/uploads/2023/02/Ash_Ketchum_Money.jpg"
        title="pepper pig para"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pepper "Pablo" Pig
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Spend money like pablo escobar. Alcohol, snow and big cars - Pepper "Pablo" Pig shows how it works.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://nintendosoup.com/wp-content/uploads/2019/10/meowth_mime_jr_money.jpg"
        title="pepper pig para"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pepper "Pablo" Pig
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Spend money like pablo escobar. Alcohol, snow and big cars - Pepper "Pablo" Pig shows how it works.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

      </Grid>
  );
}