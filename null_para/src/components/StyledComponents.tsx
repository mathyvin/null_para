import { Grid, Paper, styled } from "@mui/material";
  
export const StyledPaper = styled(Paper)({
    padding: '10px',
    height: '100%',
    minHeight: '70px',
    textAlign: 'center',
    color: 'black', // Textfarbe
    backgroundColor: '#E5E5E5', // Hintergrundfarbe der Kacheln
    borderRadius: '5px', // abgerundete Ecken
  });