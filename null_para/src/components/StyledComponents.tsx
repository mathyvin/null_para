import { Grid, Paper, Typography, styled } from "@mui/material";
  
export const StyledPaper = styled(Paper)({
    padding: '10px',
    height: '100%',
    minHeight: '70px',
    textAlign: 'center',
    color: 'black', // Textfarbe
    backgroundColor: '#E5E5E5', // Hintergrundfarbe der Kacheln
    borderRadius: '5px', // abgerundete Ecken
  });


export const StyledGridItem = styled(Grid)({
  margin: '0px',
})
  
  export const StyledTypographyBig = styled(Typography)({
    fontSize: '24px',  // Adjust size as needed
    fontWeight: 'bold',
    margin: '0px',
  });

  export const StyledTypographySmall = styled(Typography)({
    fontSize: '14px',  // Adjust size as needed
    padding: '0px',
    margin: '0px'
  });