import { Card, CardContent, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { CustomLinearProgress, StyledBox, StyledBoxItem, StyledPaper, StyledTypographyBig, StyledTypographySmall } from './StyledComponents';
import { margin } from '@mui/system';

interface SparzielProps {
  title: string;
  amount: number;
  balance: number;
}

export function Sparziel({ title, amount, balance } : SparzielProps) {

  let progress = Math.round(balance / amount * 100);
  console.log(amount)
  console.log(balance)
  progress = progress > 100 ? 100 : progress;

  return (
    <StyledPaper>
      <StyledBox display="flex" flexDirection="column">
        <StyledBoxItem>
        <StyledTypographyBig>
          {title}
        </StyledTypographyBig>
        </StyledBoxItem>
        <StyledBoxItem>
        <StyledTypographySmall>
          {amount}€
        </StyledTypographySmall>
        </StyledBoxItem>
        <StyledBoxItem>
        <CustomLinearProgress 
          color='info'
          variant="determinate" 
          value={progress}
          />
        <StyledTypographyBig marginBottom='15px'>
          {progress}%
        </StyledTypographyBig>
        </StyledBoxItem>
        </StyledBox>
    </StyledPaper>
  );
};