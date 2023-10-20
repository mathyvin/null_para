import { Grid, Paper, Typography, styled } from "@mui/material";
import { lineHeight } from "@mui/system";
export const StyledPaper = styled(Paper)({
  paddingRight: '3px',
  paddingTop: '8px',
  marginTop: '5px',
  height: '100%',
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#E5E5E5',
  borderRadius: '5px',
  minHeight: '0px'
});

export const StyledGridItem = styled(Grid)({
  margin: '5px',
  paddingTop: '0px !important',
  marginTop: '5px',
});

export const StyledTypographyBig = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '0px !important',
});

export const StyledTypographySmall = styled(Typography)({
  fontSize: '12px',
});


export const StyledBankingGrid = styled(Grid)({
  padding: '5px !important',
})