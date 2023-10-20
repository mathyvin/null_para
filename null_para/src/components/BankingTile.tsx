import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {StyledGridItem, StyledPaper, StyledTypographyBig, StyledTypographySmall} from './StyledComponents'
import React from 'react';
import { ITransaction } from '../interfaces/ITransaction';

interface BankingTileParams {
  transaction: ITransaction
}

export default function BankingTile({}){

  return   (  
    <StyledPaper>
    <Grid container direction="column" spacing={2}>
      
      {/* Transaction Value */}
      <StyledGridItem item>
        <StyledTypographyBig>
          $1234.56  {/* Example Value */}
        </StyledTypographyBig>
      </StyledGridItem>
      
      {/* Transaction Date */}
      <StyledGridItem item>
        <StyledTypographySmall>
          20th Oct 2023  {/* Example Date */}
        </StyledTypographySmall>
      </StyledGridItem>
      
      {/* Recipient Name */}
      <StyledGridItem item>
        <StyledTypographySmall variant="body1">
          John Doe  {/* Example Recipient */}
        </StyledTypographySmall>
      </StyledGridItem>

    </Grid>
  </StyledPaper>
  
  )
}